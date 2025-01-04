import {
    HStack,
    Heading,
    VStack,
    Button,
    SimpleGrid,
    Divider,
    useToast,
    Text,
    Box,
    Flex
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FullScreenSection from "./FullScreenSection";
import CartItems from "./CartItems";
import { fooditems } from "../utils/data";
import { useScreenSize } from "../context/ScreenSizeContext";
import { Link } from 'react-router-dom';
import useSubmit from "../hooks/useSubmit";
import DeliveryAddress from "./DeliveryAddress"
import Payment from "./Payment";

const CustomToastDescription = ({ success }) => {
    return (
        <Text fontSize="lg" fontStyle="italic" lineHeight="1.5">
            {success ? (
                <>
                    Your order has been successfully placed!<br />
                    Your food will be delivered in 10 mins.
                </>
            ) : (
                <>
                    There was an error placing your order.<br />
                    Please try again later.
                </>
            )}
        </Text>
    );
};

const Cart = () => {
    const [foodList, setFoodList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [confirm, setConfirm] = useState(false);
    const { items, setItems, fireConfetti } = useScreenSize();
    const { isLoading, submit } = useSubmit();
    const toast = useToast();

    const cartFilter = (items) => items.filter(item => item.count !== 0).sort((a, b) => a.id - b.id);

    const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return total + (price * item.count);
        }, 0);
    };

    const calculateTotalCount = (items) => items.reduce((total, item) => total + item.count, 0);

    const deliveryPrice = (count) => count * 10 + 12;
    const filteredItems = cartFilter(items);
    useEffect(() => {
        const filteredItems = cartFilter(items);
        const combinedData = filteredItems
            .filter(count => fooditems.some(food => food.id === count.id))
            .map(count => {
                const food = fooditems.find(food => food.id === count.id);
                return {
                    ...food,
                    count: count.count,
                    key: count.key,
                    ingredients: count.ingredients,
                    //price: count.price,
                };
            });

        setFoodList(combinedData);
        setTotalPrice(calculateTotalPrice(combinedData));
        setTotalCount(calculateTotalCount(combinedData));
    }, [items]);

    const handleOrderSubmit = async () => {
        const orderDetails = { foodList, totalPrice, totalCount };
        try {
            setConfirm(false);
            await submit('https://john.com/contactme', orderDetails);
            setItems([]);
            toast({
                title: <Heading size="md" fontWeight="semibold" lineHeight="1.5">Order Placed.</Heading>,
                description: <CustomToastDescription success />,
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            fireConfetti();
            setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 300);
        } catch {
            setConfirm(false);
            toast({
                title: <Heading size="md" fontWeight="semibold" lineHeight="1.5">Order Failed.</Heading>,
                description: <CustomToastDescription />,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };
    const toggleComfirmForm = () => {
        setConfirm((prev) => !prev);
    };

    const PlaceOrderComfirm = () => {
        return(
            <Flex
            height="100vh"
            alignItems="center"
            justifyContent="center"
            position="fixed" // Fixed positioning to float above other content
            top="0"
            left="0"
            right="0"
            bottom="0"
            zIndex="1000" // Ensure it appears above other content
            backgroundColor="rgba(0, 0, 0, 0.5)" // Semi-transparent backdrop
        >
            <Box
                maxWidth={{ base: '95%', md: '450px' }}
                padding="4rem"
                shadow="rgba(17, 17, 26, 0.1) 0px 4px 16px,
                rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"
                backgroundColor="#EDEFEE"
                borderRadius="2xl"
                position="relative" // Use relative positioning for the box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                gap="2.5rem"
                letterSpacing="0.8px"
            >
                <VStack width="100%" justifyContent="space-between">
                <Heading size="md" fontWeight="semibold" lineHeight="2" color="#333333">Are You Sure Comfirm Order?</Heading>
                    <HStack width="100%" justifyContent="space-between">
                        <Button onClick={handleOrderSubmit} size="md" colorScheme="yellow" width="30%">
                            <span style={{ color: '#333333' }}>OK</span>
                        </Button>
                        <Button onClick={toggleComfirmForm} size="md" colorScheme="yellow" width="30%">
                            <span style={{ color: '#333333' }}>Cancel</span>
                        </Button>
                    </HStack>
                </VStack>
            </Box>
        </Flex>
        );
    };
    //console.log("foodList",foodList)
    return (
        <>
        {confirm ? (
            <PlaceOrderComfirm/>
        ):(null)}
        <FullScreenSection
            justifyContent="center"
            alignItems="start"
            isDarkBackground
            backgroundColor="#EDEFEE"
            minHeight="50vh"
        >
            {foodList.length > 0 ? (
                <>
                    <DeliveryAddress />
                    <SimpleGrid columns={{ base: 1, md: 1 }} spacing={{ base: "0.7rem", md: "2rem" }}width="100%">
                        <HStack width="100%" justifyContent="space-between">
                            <Heading size="lg" fontWeight="semibold" color="#333333">
                                Total Items ({totalCount})
                            </Heading>
                            <Heading size="lg" fontWeight="semibold" color="#333333" textAlign="right">
                                Price
                            </Heading>
                        </HStack>
                        {foodList.map(food => (
                            <CartItems
                                {...food}
                                key={food.key}
                                imageSrc={food.getImageSrc()}
                                ingredients={food.ingredients}
                            />
                        ))}
                    </SimpleGrid>
                    <Divider orientation='horizontal' variant="solid" borderColor="#495E57" />
                    <SimpleGrid columns={{ base: 1, md: 1 }} width="100%">
                        {/* Order Summary */}
                        <VStack minWidth="41vw">
                            <Heading size="lg" fontWeight="semibold" color="#333333"alignSelf="start">Order Summary</Heading>
                            <SimpleGrid columns={2} spacing={5} alignSelf="start" py={5} width="100%">
                                <Text size="md" color="#333333">Total Price:</Text>
                                <Text size="md" color="#333333" textAlign="right">${totalPrice.toFixed(2)}</Text>
                                <Text size="md" color="#333333">Delivery Charges:</Text>
                                <Text size="md" color="#333333" textAlign="right">${deliveryPrice(totalCount)}</Text>
                            </SimpleGrid>
                        </VStack>
                        {/* Discount Section */}
                        <VStack minWidth="41vw">
                            <Heading size="lg" fontWeight="semibold" color="#333333"alignSelf="start">Discount</Heading>
                            <SimpleGrid columns={1} spacing={5} alignSelf="start" py={5} width="100%">
                                <Text size="md" color="#333333"alignSelf="start">Save @ 50% off With Dinner Deal 20</Text>
                                <Text size="md" color="#333333"alignSelf="start">View all restaurant coupons</Text>
                            </SimpleGrid>
                        </VStack>
                        <Payment />
                        {/* Order Total Section */}
                        <VStack minWidth="41vw" py={5}>
                            <SimpleGrid columns={2} spacing={5} alignSelf="start" width="100%">
                                <Heading size="md" fontWeight="semibold" color="#333333" alignSelf="start">Order Total:</Heading>
                                <Heading size="md" fontWeight="semibold" color="#FC2063" textAlign="right">
                                    ${(totalPrice + deliveryPrice(totalCount)).toFixed(2)}
                                </Heading>
                            </SimpleGrid>
                        </VStack>
                        
                        {/* Place Order Button */}
                        <VStack minWidth="41vw" py={5}>
                            <Button colorScheme="yellow" width="100%" onClick={toggleComfirmForm}>
                                <span style={{ color: '#333333', fontSize: '22px' }}>Place Order</span>
                            </Button>
                        </VStack>
                    </SimpleGrid>
                    
                </>
            ) : (
                <VStack color="#333333">
                    <Heading size="2xl" fontWeight="semibold" color="#495E57">Empty Cart!</Heading>
                    <Link to="/order-online">
                        <Heading size="lg" fontWeight="semibold" color="#FC2063" _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                            Click to Order
                        </Heading>
                    </Link>
                </VStack>
            )}
        </FullScreenSection>
        </>
    );
};

export default Cart;
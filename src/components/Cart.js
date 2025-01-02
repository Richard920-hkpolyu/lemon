import {
    HStack,
    Heading,
    VStack,
    Button,
    SimpleGrid,
    Divider,
    useToast,
    Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FullScreenSection from "./FullScreenSection";
import CartItems from "./CartItems.js";
import { fooditems } from "../utils/data";
import { useScreenSize } from "../context/ScreenSizeContext";
import { Link } from 'react-router-dom';
import useSubmit from "../hooks/useSubmit";

const CustomToastDescriptionSuccess = () => {
    return (
        <Text
            fontSize="lg" // Change font size
            fontStyle="italic" // Change font style
            lineHeight="1.5" // Adjust line height for readability
        >
            Your order has been successfully placed! <br/>
            Your food will be delivered in 10 mins.
        </Text>
    );
};

const CustomToastDescriptionError = () => {
    return (
        <Text
            fontSize="lg" // Change font size
            fontStyle="italic" // Change font style
            lineHeight="1.5" // Adjust line height for readability
        >
            There was an error placing your order. <br/>
            Please try again later.
        </Text>
    );
};

const Cart = () => {
    const [foodList, setFoodList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const { items, setItems } = useScreenSize();
    const { isLoading, submit } = useSubmit();
    const toast = useToast();

    const cartFilter = (item) => {
        return item.filter((item) => item.count !== 0).sort((a, b) => a.id - b.id);
    };

    const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return total + (price * item.count);
        }, 0);
    };

    const calculateTotalCount = (items) => {
        return items.reduce((total, item) => total + item.count, 0);
    };

    const deliveryPrice = (count) => {
        return count * 10 + 12;
    };

    useEffect(() => {
        const filter = cartFilter(items);
        const combinedData = fooditems
            .filter(food => filter.some(count => count.id === food.id))
            .map(food => {
                const countItem = filter.find(count => count.id === food.id);
                return {
                    ...food,
                    count: countItem ? countItem.count : 0
                };
            });

        setFoodList(combinedData);
        setTotalPrice(calculateTotalPrice(combinedData));
        setTotalCount(calculateTotalCount(combinedData));
    }, [items]);

    const handleOrderSubmit = async () => {
        const orderDetails = {
            foodList: foodList,
            totalPrice: totalPrice,
            totalCount: totalCount
        };
        try {
            await submit('https://john.com/contactme', orderDetails);
            setItems([]);
            toast({
                title: <Heading size="md" fontWeight="semibold" lineHeight="1.5">Order Placed.</Heading>,
                description: <CustomToastDescriptionSuccess />,
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 300);
        } catch (error) {
            toast({
                title: <Heading size="md" fontWeight="semibold" lineHeight="1.5">Order Failed.</Heading>,
                description: <CustomToastDescriptionError />,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="start"
            isDarkBackground
            backgroundColor="#EDEFEE"
            py={12}
            minHeight="50vh"
        >
            {foodList.length > 0 ? (
                <>
                    <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
                        <HStack justify="space-between" align="center" width="100%">
                            <Heading size="lg" fontWeight="semibold" noOfLines={1} color="#333333">
                                Total Items ({totalCount})
                            </Heading>
                            <Heading size="lg" fontWeight="semibold" noOfLines={1} color="#333333" px="12vw">
                                Price
                            </Heading>
                        </HStack>
                        {foodList.map((food) => (
                            <CartItems
                                key={food.id}
                                id={food.id}
                                title={food.title}
                                category={food.category}
                                type={food.type}
                                monthly={food.monthly}
                                description={food.description}
                                price={food.price}
                                imageSrc={food.getImageSrc()}
                            />
                        ))}
                    </SimpleGrid>
                    <Divider orientation='horizontal' variant="solid" borderRadius="lg" borderColor="#495E57" />
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        {/* Order Summary */}
                        <VStack minWidth="41vw">
                            <SimpleGrid columns={{ base: 2, md: 2 }} spacing={10} alignSelf="start">
                                <Heading size="lg" fontWeight="semibold" noOfLines={1} color="#333333">Order Summary</Heading>
                                <Heading></Heading>
                                <Heading size="md" fontWeight="thin" noOfLines={1} color="#333333">Total Price:</Heading>
                                <Heading size="md" fontWeight="thin" noOfLines={1} color="#333333">${totalPrice.toFixed(2)}</Heading>
                                <Heading size="md" fontWeight="thin" noOfLines={1} color="#333333">Delivery Charges:</Heading>
                                <Heading size="md" fontWeight="thin" noOfLines={1} color="#333333">${deliveryPrice(totalCount)}</Heading>
                            </SimpleGrid>
                        </VStack>
                        {/* Discount Section */}
                        <VStack alignSelf="start" minWidth="41vw">
                            <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10} alignSelf="start">
                                <Heading size="lg" fontWeight="semibold" noOfLines={1} color="#333333">Discount</Heading>
                                <Heading size="md" fontWeight="thin" noOfLines={1} color="#333333">Save @ 50% off With Dinner Deal 20</Heading>
                                <Heading size="md" fontWeight="thin" noOfLines={1} color="#333333">View all restaurant coupons</Heading>
                            </SimpleGrid>
                        </VStack>
                        {/* Order Total Section */}
                        <VStack alignSelf="start" minWidth="41vw" py={5}>
                            <SimpleGrid columns={{ base: 2, md: 2 }} spacing={'9.3rem'} alignSelf="start">
                                <Heading size="md" fontWeight="semibold" noOfLines={1} color="#333333">Order Total:</Heading>
                                <Heading size="md" fontWeight="semibold" noOfLines={1} color="#FC2063">
                                    ${(totalPrice + deliveryPrice(totalCount)).toFixed(2)}
                                </Heading>
                            </SimpleGrid>
                        </VStack>
                        {/* Place Order Button */}
                        <VStack alignSelf="start" minWidth="41vw" py={5}>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignSelf="start">
                                <Button colorScheme="yellow" width="xs" onClick={handleOrderSubmit} isLoading={isLoading}>
                                    <span style={{ color: '#333333', fontSize: '22px' }}>Place Order</span>
                                </Button>
                            </SimpleGrid>
                        </VStack>
                    </SimpleGrid>
                </>
            ) : (
                <VStack color="#333333">
                    <Heading size="2xl" fontWeight="semibold" noOfLines={1} color="#495E57">Empty Cart!</Heading>
                    <Link to="/order-online">
                        <Heading size="lg" fontWeight="semibold" noOfLines={1} color="#FC2063" _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                            Click to Order
                        </Heading>
                    </Link>
                </VStack>
            )}
        </FullScreenSection>
    );
};

export default Cart;
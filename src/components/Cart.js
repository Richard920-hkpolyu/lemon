import { HStack, Heading, VStack, Button, ButtonGroup, SimpleGrid, Flex, Divider, Box } from "@chakra-ui/react";
import React, { useEffect, useState,  } from "react";
import FullScreenSection from "./FullScreenSection";
import CartItems from "./CartItems.js";
import { fooditems, } from "../utils/data";
import { useScreenSize } from "../context/ScreenSizeContext";
import {Link} from 'react-router-dom';
const Cart = () => {
    const [filterList, setFilterList] = useState([]);
    const [foodList, setFoodList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    //setTotalprice(() => (count * parseFloat(price.replace("$", ""))).toFixed(2));
    const { items } = useScreenSize();
    //console.log("items:",items);

    const cartFilter = (item) => {
        const filteredList = item
            .filter((item) => item.count != 0)
            .sort((a, b) => a.id - b.id);
        //setFilterList(filteredList);
        return filteredList
    };

    const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => {
            // Convert price from string to float
            const price = parseFloat(item.price.replace('$', ''));
            return total + (price * item.count);
        }, 0);
    };
    const calculateTotalCount = (items) => {
        return items.reduce((total, item) => {
            return total + item.count;
        }, 0);
    };
    const deliveryPrice = (count) => {
        return count*10+12;
    };
    useEffect(() => {
        console.log("items111222:",items);
        const filter = cartFilter(items);

        // Update filterList using the new filter
        setFilterList(filter);

        // Combine data using the latest filter
        const combinedData = fooditems
        .filter(food => filter.some(count => count.id === food.id))
        .map(food => {
            const countItem = filter.find(count => count.id === food.id);
            return {
                ...food,
                count: countItem ? countItem.count : 0 // Add count if exists
            };
        });

        setFoodList(combinedData);
        setTotalPrice(calculateTotalPrice(combinedData));
        setTotalCount(calculateTotalCount(combinedData));
    }, [items]);

    //console.log("filterList",filterList);
    console.log("foodList",foodList);
    //console.log("totalPrice",totalPrice);
    return(
        <FullScreenSection
        justifyContent="center"
        alignItems="start"
        isDarkBackground
        backgroundColor="#EDEFEE"
        py={12}
        minHeight="50vh"
        >
            {foodList.length > 0  && true ? (
                <>
                <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
                    <HStack justify="space-between" align="center" width="100%">
                        <Heading size="lg" fontWeight="semibold" noOfLines={1} color="#333333"id="menu-section">Total Items({totalCount})</Heading>
                        <Heading size="lg" fontWeight="semibold" noOfLines={1} color="#333333"id="menu-section" px={10}>Price</Heading>
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
                <Divider orientation='horizontal' variant="solid" borderRadius="lg" borderColor="#495E57"/>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <VStack minWidth="41vw">
                        <SimpleGrid columns={{ base: 2, md: 2 }} spacing={10} alignSelf="start">
                            <Heading size="lg" fontWeight="semibold" noOfLines={1} color="#333333">Order Summary</Heading>
                            <Heading></Heading>
                            <Heading size="md" fontWeight="thin" noOfLines={1} color="#333333">Total Price:</Heading>
                            <Heading size="md" fontWeight="thin" noOfLines={1} color="#333333">${totalPrice.toFixed(2)}</Heading>
                            <Heading size="md" fontWeight="thin" noOfLines={1} color="#333333">Delivery Charges:</Heading>
                            <Heading size="md" fontWeight="thin" noOfLines={1} color="#333333">${deliveryPrice(totalCount)}</Heading>
                            <Heading size="md" fontWeight="semibold" noOfLines={1} color="#333333">Order Total:</Heading>
                            <Heading size="md" fontWeight="semibold" noOfLines={1} color="#FC2063">${(totalPrice+deliveryPrice(totalCount)).toFixed(2)}</Heading>
                        </SimpleGrid>
                    </VStack>
                    <HStack minWidth="41vw">
                        <Divider orientation='vertical' variant="solid" borderRadius="lg" borderColor="#495E57"/>
                        <VStack alignSelf="start">
                            <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10} alignSelf="start">
                                <Heading size="lg" fontWeight="semibold" noOfLines={1} color="#333333">Discount</Heading>
                                <Heading size="md" fontWeight="thin" noOfLines={1} color="#333333">Save @ 50% off With Dinner Deal 20</Heading>
                                <Heading size="md" fontWeight="thin" noOfLines={1} color="#333333">View all restaurant coupons</Heading>
                                <Button colorScheme="yellow" width="xs"><span style={{ color: '#333333', fontSize: '22px' }}>Place Order&nbsp;</span></Button>
                            </SimpleGrid>
                        </VStack>
                    </HStack>
                </SimpleGrid>
                <Divider orientation='horizontal' variant="solid" borderRadius="lg" borderColor="#495E57"/>
                </>
            ):(
                <VStack color="#333333">
                    <Heading size="2xl" fontWeight="semibold" noOfLines={1} color="#495E57">Empty Cart!</Heading>
                    <Link to="/order-online"><Heading size="lg" fontWeight="semibold" noOfLines={1} color="#FC2063" _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>Click to Order</Heading></Link>
                </VStack>
            )}

        </FullScreenSection>
    );
};

export default Cart;
/*
foodList.count > 0 && true ? (
    ):(
        null
    )
*/
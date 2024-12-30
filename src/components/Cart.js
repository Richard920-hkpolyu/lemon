import { HStack, Heading, VStack, Button, ButtonGroup, SimpleGrid, Flex, Divider } from "@chakra-ui/react";
import React, { useEffect, useState,  } from "react";
import FullScreenSection from "./FullScreenSection";
import CartItems from "./CartItems.js";
import { fooditems, } from "../utils/data";
import { useScreenSize } from "../context/ScreenSizeContext";
const Cart = () => {
    const [filterList, setFilterList] = useState([]);
    const [foodList, setFoodList] = useState([]);
    const { modifyItems, items } = useScreenSize();
    console.log("items:",items)

    const cartFilter = (item) => {
        const filteredList = item
            .filter((item) => item.count != 0)
            .sort((a, b) => a.id - b.id);
        //setFilterList(filteredList);
        return filteredList
    };
    useEffect(() => {
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
    }, []);

    console.log("filterList",filterList);
    console.log("foodList",foodList)
    return(
        <FullScreenSection
        justifyContent="center"
        alignItems="start"
        isDarkBackground
        backgroundColor="#EDEFEE"
        py={12}
        >
            <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
                <Flex justify="space-between" align="center" width="100%">
                    <Heading size="lg" fontWeight="semibold" noOfLines={1} color="#333333"id="menu-section">Total Items</Heading>
                    <Heading size="lg" fontWeight="semibold" noOfLines={1} color="#333333"id="menu-section" px={10}>Price</Heading>
                </Flex>
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
            <Divider orientation='horizontal' variant="solid" borderWidth="1px" borderRadius="lg" borderColor="#495E57"/>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <VStack>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} >
                        <Heading size="lg" fontWeight="semibold" noOfLines={1} color="#333333">Order Summary</Heading>
                        <Heading></Heading>
                        <Heading size="md" fontWeight="thin" noOfLines={1} color="#333333">Total Price:</Heading>
                        <Heading size="md" fontWeight="thin" noOfLines={1} color="#333333">$100</Heading>
                        <Heading size="md" fontWeight="thin" noOfLines={1} color="#333333">Delivery Charges:</Heading>
                        <Heading size="md" fontWeight="thin" noOfLines={1} color="#333333">$20</Heading>
                        <Divider orientation='horizontal' variant="solid" borderWidth="1px" borderRadius="lg" borderColor="#495E57"/><Heading></Heading>
                        <Heading size="lg" fontWeight="semibold" noOfLines={1} color="#333333">Order Total:</Heading>
                        <Heading size="lg" fontWeight="semibold" noOfLines={1} color="#FC2063">$120</Heading>
                    </SimpleGrid>
                </VStack>
                <HStack>
                    <Divider orientation='vertical' variant="solid" borderWidth="1px" borderRadius="lg" borderColor="#495E57"/>
                    <VStack>
                        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10} >
                            <Heading size="lg" fontWeight="semibold" noOfLines={1} color="#333333">Discount</Heading>
                            <Heading size="md" fontWeight="thin" noOfLines={1} color="#333333">Save @ 50% off With Dinner Deal 20</Heading>
                            <Heading size="md" fontWeight="thin" noOfLines={1} color="#333333">View all restaurant coupons</Heading>
                            <Button colorScheme="yellow" width="xs"><span style={{ color: '#333333', fontSize: '22px' }}>Place Order&nbsp;</span></Button>
                        </SimpleGrid>
                    </VStack>
                </HStack>
            </SimpleGrid>
            <Divider orientation='horizontal' variant="solid" borderWidth="1px" borderRadius="lg" borderColor="#495E57"/>
        </FullScreenSection>
    );
};

export default Cart;
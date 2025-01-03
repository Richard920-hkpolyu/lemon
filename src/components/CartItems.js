import { HStack, Heading, VStack, Text, Image, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteIcon, AddIcon } from '@chakra-ui/icons';
import { useScreenSize } from "../context/ScreenSizeContext";

const CartItems = ({ id, title, category, type, monthly, description, price, imageSrc }) => {
    const navigate = useNavigate();
    const { modifyItems, items } = useScreenSize();
    const initialCount = items.find(item => item.id === id)?.count || 0;
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        modifyItems(id, count);
    }, [id, count, modifyItems]);

    const handleNavigate = () => {
        navigate(`/order-online/order/${title}`, { state: { id, title, category, type, monthly, description, price, imageSrc } });
    };

    const handleIncrement = () => setCount(prevCount => prevCount + 1);
    const handleDecrement = () => setCount(prevCount => Math.max(prevCount - 1, 0));

    return (
        <SimpleGrid
            columns={3}
            color="#333333"
            backgroundColor="#EDEFEE"
            cursor="pointer"
            borderWidth="1px"
            borderRadius="md"
            _hover={{ borderColor: "#F9E689" }}
            alignItems="center"
            width="100%"
        >
            <VStack alignItems="start" width="40vw">
                <Image
                    width="25vw"
                    height="25vh"
                    borderRadius="xl"
                    alignSelf="start"
                    src={imageSrc}
                    alt={title}
                    fit="cover"
                    loading="lazy"
                    transition="all 0.4s linear"
                    _hover={{ transform: "scale(1.04)", bg: "teal.600" }}
                    _active={{ transform: "scale(1)" }}
                    onClick={handleNavigate}
                />
            </VStack>
            <VStack alignItems="start" width="100%">
                <Heading size="lg" fontWeight="semibold" color="#333333" onClick={handleNavigate}>
                    {title}
                </Heading>
                <Text color="#333333" fontSize="lg" noOfLines={3}>
                    {type}
                </Text>
                <SimpleGrid columns={1} spacing={5} alignSelf="start" py={5} width="100%">
                    {count > 0 ? (
                        <HStack alignSelf="center" gap={10} ml="-15px">
                            <Button onClick={handleDecrement}>
                                <DeleteIcon color="#333333" />
                            </Button>
                            <Text color="#333333" fontSize="lg">{count}</Text>
                            <Button onClick={handleIncrement}>
                                <AddIcon color="#333333" />
                            </Button>
                        </HStack>
                    ) : (
                        console.log(`You removed the item ${title}`)
                    )}
                </SimpleGrid>
            </VStack>
            <VStack alignItems="right" width="100%">
                <Heading size="lg" fontWeight="semibold" color="#FC2063" textAlign="right">
                    {(parseFloat(price.replace("$", "")) * count).toFixed(2)}
                </Heading>
            </VStack>
        </SimpleGrid>
    );
};

export default CartItems;
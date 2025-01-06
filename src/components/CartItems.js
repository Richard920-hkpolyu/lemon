import { HStack, Heading, VStack, Text, Image, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteIcon, AddIcon } from '@chakra-ui/icons';
import { useScreenSize } from "../context/ScreenSizeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
const CartItems = ({ id, title, category, type, monthly, ingredients, description, price, imageSrc }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/order-online/order/${title.replace(/ /g, "")}`, { state: dataToPass });
    };
    const dataToPass = {
        id: id,
        title: title,
        category: category,
        type: type,
        monthly: monthly,
        ingredients: ingredients,
        description: description,
        price: price,
        imageSrc: imageSrc,
    };
    const { modifyItems, items } = useScreenSize();
    const ingredientsNames = ingredients.map(item => item.name).join(', ');

    const findCountById = (items, id, addIngredients) => {
        const item = items.find((item) => item.id === id &&
            item.ingredients.length === addIngredients.length &&
            item.ingredients.every(ingredient =>
                addIngredients.some(addIngredient => addIngredient.name === ingredient.name)
            )
        );
        //console.log("item",item);
        return item ? item.count : 0;
    };
    const initialCount = findCountById(items, id, ingredients);



    //const initialCount = items.find(item => item.id === id)?.count || 0;
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        modifyItems(id, count,ingredients);
    }, [id, count, modifyItems]);

    const handleIncrement = () => setCount(prevCount => prevCount + 1);
    const handleDecrement = () => setCount(prevCount => Math.max(prevCount - 1, 0));
    console.log("ingredients",ingredients);
    return (
        <HStack
            color="#333333"
            backgroundColor="#FFFFFF"
            borderWidth="1px"
            borderRadius="md"
            alignItems="center"
            width="100%"
        >
            <VStack alignItems="start" width="39vw">
                <Image
                    width={{ base: "35vw", md: "25vw" }}
                    height={{ base: "35vw", md: "25vh" }}
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
            <VStack alignItems="start" width="39vw">
                <Heading size={{ base: "md", md: "lg" }} fontWeight="semibold" color="#333333" onClick={handleNavigate}>
                    {title}
                </Heading>
                <Text color="#333333" fontSize={{ base: "md", md: "lg" }} noOfLines={3}>
                    {type}
                </Text>
                <Text color="#333333" fontSize={{ base: "md", md: "lg" }} noOfLines={3}>
                    {ingredientsNames}
                </Text>
                <SimpleGrid columns={1} spacing={5} alignSelf="start" py={{ base: 0, md: 5 }} width="100%">
                    {count > 0 ? (
                        <HStack alignSelf="center" gap={5} ml="-10px">
                            <Button onClick={handleDecrement}>
                                <FontAwesomeIcon icon={faMinus} color="#333333"/>
                            </Button>
                            <Text color="#333333" fontSize="lg">{count}</Text>
                            <Button onClick={handleIncrement}>
                                <FontAwesomeIcon icon={faPlus} color="#333333"/>
                            </Button>
                        </HStack>
                    ) : (
                        console.log(`You removed the item ${title}`)
                    )}
                </SimpleGrid>
            </VStack>
            <VStack alignItems="right" width="20vw">
                <Heading size={{ base: "md", md: "lg" }} fontWeight="semibold" color="#FC2063" textAlign="right">
                    {(parseFloat(price.replace("$", "")) * count).toFixed(2)}
                </Heading>
            </VStack>
        </HStack>
    );
};

export default CartItems;
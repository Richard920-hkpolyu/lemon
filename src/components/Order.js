import { HStack, Heading, VStack, Button, Text, Image, useMediaQuery, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import img1 from "../images/Delivery.jpg";
import { Link, useLocation } from 'react-router-dom';
import { DeleteIcon, AddIcon, MinusIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { useScreenSize } from "../context/ScreenSizeContext";
import FullScreenSection from "./FullScreenSection";

const Order = () => {
    const [isMobile] = useMediaQuery("(max-width: 28em)");
    const { modifyItems, items } = useScreenSize();
    const location = useLocation();
    const { state } = location || {};

    const {
        id = 0,
        title = "Default Title",
        category = "Default Category",
        type = "Default Type",
        monthly = 0,
        ingredients = [],
        description = "Default Description",
        price = 0,
        imageSrc = ""
    } = state || {};

    const [addIngredients, setAddIngredients] = useState(ingredients);
    const [count, setCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(price);

    const findIngredientsById = (items, id) => {
        const item = items.find(item => item.id === id);
        return item ? item.ingredients : [];
    };

    const findCountById = (items, id, addIngredients) => {
        const item = items.find(item => 
            item.id === id && 
            item.ingredients.length === addIngredients.length && 
            item.ingredients.every(ingredient => 
                addIngredients.some(addIngredient => addIngredient.name === ingredient.name)
            )
        );
        return item ? item.count : 0;
    };

    const foundCount = findCountById(items, id, addIngredients);

    useEffect(() => {
        const ingredientsFromItems = findIngredientsById(items, id);
        setAddIngredients(ingredientsFromItems.length > 0 ? ingredientsFromItems : ingredients);
    }, [id, items, ingredients]);

    useEffect(() => {
        const ingredientsPrice = addIngredients.reduce((total, item) => {
            return total + parseFloat(item.price.replace('$', ''));
        }, 0);
        setTotalPrice((count * parseFloat(price.replace("$", "")) + ingredientsPrice - 3).toFixed(2));
    }, [count, addIngredients, price]);

    const handleIncrement = () => setCount(prevCount => prevCount + 1);
    const handleDecrement = () => setCount(prevCount => Math.max(prevCount - 1, 1));
    const handleDelete = (ingredientName) => {
        setAddIngredients(prevIngredients => 
            prevIngredients.filter(ingredient => ingredient.name !== ingredientName)
        );
    };

    const buttonEvent = () => {
        modifyItems(id, foundCount + count, addIngredients);
        setCount(1);
    };

    const renderImage = () => (
        <Box paddingTop={{ base: "0", sm: "4rem", md: "2.5rem" }}>
            <Image
                width={{ base: "100vh", md: "42vw" }}
                maxHeight={{ base: "40vh", md: "80vh" }}
                borderRadius="xl"
                src={imageSrc}
                objectFit="cover"
            />
        </Box>
    );

    const renderDescription = () => (
        <>
            <Heading size={{ base: "md", md: "lg" }} fontWeight="semibold" color="#333333">{title}</Heading>
            <Text color="#333333" fontSize={{ base: "md", md: "lg" }}>{description}</Text>
        </>
    );

    const renderIngredients = () => (
        <VStack alignItems="start" width="100%">
            {addIngredients.map((item, index) => (
                <HStack key={index} width="100%" justifyContent="space-between">
                    <Text color="#333333" fontSize="md" width="10rem">{item.name}</Text>
                    <Text color="#333333" fontSize="md" width="7rem">{item.price}</Text>
                    <DeleteIcon onClick={() => handleDelete(item.name)} color="#333333" width={{ base: "5rem", md: "5rem" }} _hover={{ backgroundColor: '#FCF5CF', cursor: 'pointer', borderRadius: 'md' }}/>
                </HStack>
            ))}
        </VStack>
    );

    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="start"
            isDarkBackground
            backgroundColor="#FFFFFF"
            py={{ base: 0, md: 12 }}
            minHeight={{ base: '25vh' }}
        >
            <VStack borderWidth="1px" alignItems="left" width="auto" backgroundColor="#FFFFFF">
                {isMobile ? (
                    <HStack>
                        <VStack alignItems="start" width="100%">
                            <Link to="/order-online">
                                <ArrowBackIcon bgColor="#495E57" color="#EDEFEE" w='2.5rem' h='2.5rem' borderRadius="full" />
                            </Link>
                            <VStack alignItems="start" alignSelf="start" width="100%">
                                {renderImage()}
                            </VStack>
                                {renderDescription()}
                            <HStack width="100%">
                                <VStack width="100%" alignItems="start">
                                    <HStack>
                                        <Image src={img1} width='4rem' height='4rem' fit="cover" />
                                        <Text color="#333333" fontSize="md">Delivery Elasp: 20 minutes</Text>
                                    </HStack>
                                </VStack>
                            </HStack>
                            <br />
                            <Heading size="md" fontWeight="semibold" color="#333333">Add</Heading>
                            {renderIngredients()}
                            <HStack alignSelf="center" gap={10} py={3}>
                                <Button onClick={handleDecrement}><MinusIcon color="#333333" /></Button>
                                <Text color="#333333" fontSize="lg">{count}</Text>
                                <Button onClick={handleIncrement}><AddIcon color="#333333" /></Button>
                            </HStack>
                            <Button colorScheme="yellow" alignSelf="center" width="full" onClick={buttonEvent}>
                                Add for ${totalPrice}
                            </Button>
                            <br />
                        </VStack>
                    </HStack>
                ) : (
                    <HStack>
                        <VStack alignItems="start" alignSelf="start" width={{ base: "47vw", md: "42vw" }} px={{ base: 0, md: 10 }}>
                            {renderImage()}
                        </VStack>
                        <VStack alignItems="start" width={{ base: "47vw", md: "40vw" }} px={{ base: 0, md: 10 }}>
                            <Link to="/order-online">
                                <ArrowBackIcon bgColor="#495E57" color="#EDEFEE" w='2.5rem' h='2.5rem' borderRadius="full" />
                            </Link>
                            {renderDescription()}
                            <HStack>
                                <VStack width="100%" alignItems="start">
                                    <HStack>
                                        <Image src={img1} width='3.4rem' height='3.4rem' fit="cover" />
                                        <Text color="#333333" fontSize="md">Delivery Elasp: 20 minutes</Text>
                                    </HStack>
                                </VStack>
                            </HStack>
                            <br />
                            <Heading size="md" fontWeight="semibold" color="#333333">Add</Heading>
                            {renderIngredients()}
                            <HStack alignSelf="center" gap={10} py={3}>
                                <Button onClick={handleDecrement}><MinusIcon color="#333333" /></Button>
                                <Text color="#333333" fontSize="lg">{count}</Text>
                                <Button onClick={handleIncrement}><AddIcon color="#333333" /></Button>
                            </HStack>
                            <Button colorScheme="yellow" alignSelf="center" width="full" onClick={buttonEvent}>
                                Add for ${totalPrice}
                            </Button>
                            <br />
                        </VStack>
                    </HStack>
                )}
            </VStack>
        </FullScreenSection>
    );
};

export default Order;
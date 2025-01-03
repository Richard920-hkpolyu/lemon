import { HStack, Heading, VStack, Button, Text, Image, useMediaQuery, Box} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import img1 from "../images/Delivery.jpg";
import {Link, useLocation } from 'react-router-dom';
import { DeleteIcon, AddIcon, MinusIcon, ArrowBackIcon} from '@chakra-ui/icons';
import { useScreenSize } from "../context/ScreenSizeContext";
import FullScreenSection from "./FullScreenSection";
const Order = () => {
    const [isMobile] = useMediaQuery("(max-width: 28em)");///////////////////25
    const findCountById = (items, id) => {
        const item = items.find((item) => item.id === id);
        return item ? item.count : undefined;
    };
    const { modifyItems, items, } = useScreenSize();
    const location = useLocation();
    const { state } = location || {};
    const { id=0, title = "Default Title", category="Default Category", type="Default Type", monthly=0 ,description = "Default Description", price = 0, imageSrc = "" } = state || {};
    const foundCount = findCountById(items, id);

    const [count, setCount] = useState(1);
    const [totalprice, setTotalprice] = useState(price);
    const handleIncrement = () => {
        setCount(count + 1);
      };
    const handleDecrement = () => {
        if (count > 1) {
          setCount(count - 1);
        }
    };
    const ButtonEvent = () => {
        modifyItems(id, foundCount+count);
        setCount(1);
    };
    useEffect(() => {
        setTotalprice(() => (count * parseFloat(price.replace("$", ""))).toFixed(2));
    }, [count]);
    const addItems = [
        { name: "Vegetable", price: "$1.00" },
        { name: "Ground Beef", price: "$1.00" },
        { name: "Minced Pork", price: "$1.00" }
    ];

    const imageTag = ({ imageSrc }) => {
        return (
            <Box paddingTop="2.5rem">
                <Image
                    width={{ base: "47vw", md: "42vw" }}
                    maxHeight="80vh"
                    borderRadius="xl"
                    src={imageSrc}
                    objectFit="cover"
                />
            </Box>
        );
    };

    const descriptionTag = () => {
        return(
            <>
                <Heading size={{ base: "lg", md: "xl" }} fontWeight="semibold" color="#333333">{title}</Heading>
                <Text color="#333333" fontSize="lg" noOfLines={3}>
                    {description}
                </Text>
            </>
        );
    };
    return (
        <FullScreenSection
        justifyContent="center"
        alignItems="start"
        isDarkBackground
        backgroundColor="#EDEFEE"
        py={{ base: 0, md: 12 }}
        minHeight={{ base: '25vh' }}
        >
            <VStack borderWidth="1px" alignItems="left" width="auto" backgroundColor="#EDEFEE">
                {isMobile ? (
                    <>
                        <HStack>
                            <VStack alignItems="start" width="100%">
                            <Link to="/order-online"><ArrowBackIcon bgColor="#495E57" color="#EDEFEE" w='2.5rem' h='2.5rem' borderRadius="full"/></Link>
                                <VStack alignItems="start" alignSelf="start" width="100%">
                                <Box>
                                    <Image
                                        width="100vh"
                                        maxHeight="40vh"
                                        borderRadius="xl"
                                        src={imageSrc}
                                        objectFit="cover"
                                    />
                                </Box>
                                </VStack>
                                {descriptionTag()}
                                <HStack width="100%">
                                    <VStack width="100%" alignItems="start">
                                        <HStack>
                                            <Image src= {img1} width='4rem' height='4rem' fit="cover" />
                                            <Text color="#333333" fontSize="md">Delivery Elasp: 20 minutes</Text>
                                        </HStack>
                                    </VStack>
                                </HStack>
                                <br/>
                                <Heading size="md" fontWeight="semibold" color="#333333">Add</Heading>
                                <VStack alignItems="start" width="100%">
                                    {addItems.map((item, index) => (
                                        <HStack key={index} width="100%" justifyContent="space-between">
                                            <Text color="#333333" fontSize="md" width="20vw" >{item.name}</Text>
                                            <Text color="#333333" fontSize="md" width="10vw" >{item.price}</Text>
                                            <DeleteIcon color="#333333" width="4rem" />
                                        </HStack>
                                    ))}
                                </VStack>
                                <HStack alignSelf="center" gap={10} py={3}>
                                    <Button onClick={handleDecrement}><MinusIcon color="#333333" /></Button>
                                    <Text color="#333333" fontSize="lg">{count}</Text>
                                    <Button onClick={handleIncrement}><AddIcon color="#333333" /></Button>
                                </HStack>
                                <Button colorScheme="yellow" alignSelf="center" width="full" onClick={ButtonEvent}>
                                    Add for ${totalprice}
                                </Button>
                                <br/>
                            </VStack>
                        </HStack>
                    </>
                    ) : (
                        <>
                        <HStack>
                            <VStack alignItems="start" alignSelf="start" width={{ base: "47vw", md: "42vw" }} px={{ base: 0, md: 10 }}>
                                {imageTag({ imageSrc: imageSrc })}
                            </VStack>
                            <VStack alignItems="start" width={{ base: "47vw", md: "40vw" }} px={{ base: 0, md: 10 }}>
                                <Link to="/order-online"><ArrowBackIcon  bgColor="#495E57" color="#EDEFEE" w='2.5rem' h='2.5rem' borderRadius="full"/></Link>
                                {descriptionTag()}
                                <HStack>
                                    <VStack width="100%" alignItems="start">
                                        <HStack>
                                            <Image src= {img1} width='3.4rem' height='3.4rem' fit="cover" />
                                            <Text color="#333333" fontSize="md">Delivery Elasp: 20 minutes</Text>
                                        </HStack>
                                    </VStack>
                                </HStack>
                                <br/>
                                <Heading size="md" fontWeight="semibold" color="#333333">Add</Heading>
                                <VStack alignItems="start">
                                    {addItems.map((item, index) => (
                                        <HStack key={index}>
                                            <Text color="#333333" fontSize="md" width="20vw">{item.name}</Text>
                                            <Text color="#333333" fontSize="md" width="10vw">{item.price}</Text>
                                            <DeleteIcon color="#333333" width="4rem" />
                                        </HStack>
                                    ))}
                                </VStack>
                                <HStack alignSelf="center" gap={10} py={3}>
                                    <Button onClick={handleDecrement}><MinusIcon color="#333333" /></Button>
                                    <Text color="#333333" fontSize="lg">{count}</Text>
                                    <Button onClick={handleIncrement}><AddIcon color="#333333" /></Button>
                                </HStack>
                                <Button colorScheme="yellow" alignSelf="center" width="full" onClick={ButtonEvent}>
                                    Add for ${totalprice}
                                </Button>
                                <br/>
                            </VStack>
                        </HStack>
                        </>
                )}

            </VStack>
        </FullScreenSection>
    );
};

export default Order;
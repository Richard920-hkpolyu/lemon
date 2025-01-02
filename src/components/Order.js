import { HStack, Heading, VStack, Button, Text, Image, } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import img1 from "../images/Delivery.jpg";
import {Link, useLocation } from 'react-router-dom';
import { DeleteIcon, AddIcon, MinusIcon, ArrowBackIcon} from '@chakra-ui/icons';
import { useScreenSize } from "../context/ScreenSizeContext";
import FullScreenSection from "./FullScreenSection";
const Order = () => {
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

    return (
        <FullScreenSection
        justifyContent="center"
        alignItems="start"
        isDarkBackground
        backgroundColor="#EDEFEE"
        py={12}>
            <VStack borderWidth="1px" alignItems="left" width="auto" backgroundColor="#EDEFEE">
                <HStack>
                    <Image width="40vw" maxHeight="80vh" borderRadius="xl" src={imageSrc} fit="cover"/>
                    <VStack alignItems="start" width="65vw" px={10}>
                        <Link to="/order-online"><ArrowBackIcon  bgColor="#495E57" color="#EDEFEE" w={10} h={10} borderRadius="full"/></Link>
                        <Heading size="xl" fontWeight="semibold" color="#333333">{title}</Heading>
                        <Text color="#333333" fontSize="lg" noOfLines={3}>
                            {description}
                        </Text>
                        <HStack>
                            <VStack width="30vw" alignItems="start">
                                <HStack>
                                    <Image src= {img1} width="50px" height="50px" fit="cover" />
                                    <Text color="#333333" fontSize="md">Delivery Elasp: 20 minutes</Text>
                                </HStack>
                            </VStack>
                        </HStack>
                        <br/>
                        <Heading size="md" fontWeight="semibold" color="#333333" >Add</Heading>
                        <VStack alignItems="start">
                            <HStack>
                                <Text color="#333333" fontSize="md" width="20vw">Vegetable</Text>
                                <Text color="#333333" fontSize="md" width="8vw">$1.00</Text>
                                <DeleteIcon color="#333333"/>
                            </HStack>
                            <HStack>
                                <Text color="#333333" fontSize="md" width="20vw">Ground Beef</Text>
                                <Text color="#333333" fontSize="md" width="8vw">$1.00</Text>
                                <DeleteIcon color="#333333"/>
                            </HStack>
                            <HStack>
                                <Text color="#333333" fontSize="md" width="20vw">Minced Pork</Text>
                                <Text color="#333333" fontSize="md" width="8vw">$1.00</Text>
                                <DeleteIcon color="#333333"/>
                            </HStack>
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
            </VStack>
        </FullScreenSection>
    );
};

export default Order;
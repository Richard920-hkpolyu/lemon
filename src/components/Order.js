import { Box, HStack, Avatar, Heading, VStack, Flex, Button, FormControl, FormErrorMessage, FormLabel, Input, Select, Textarea, Text, Image, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogHeader, AlertDialogOverlay } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { useFormik } from "formik";
import * as Yup from 'yup';
//MenuSection
import MenuSection from "./MenuSection";
import imageSrc from "../images/Brushetta.jpg";
import img1 from "../images/Delivery.jpg";
import { DeleteIcon, AddIcon, MinusIcon, ArrowBackIcon} from '@chakra-ui/icons'
const Order = () => {
    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="start"
            isDarkBackground
            backgroundColor="#495E57"
            minHeight="25vh"
        >
            <HStack>
                <VStack alignItems="start" width="65vw" py={10}>
                    <br/><br/>
                    <Heading size="2xl" fontWeight="semibold" noOfLines={1} color="#F4CE14">ORDER FOR DELIVERY!</Heading>
                </VStack>
                <VStack width="auto"><br/><br/></VStack>
            </HStack>
            <VStack borderWidth="1px" alignItems="left" width="auto" backgroundColor="#EDEFEE">
                <HStack>
                    <Image width="40vw" borderRadius="xl" src={imageSrc} fit="cover"/>
                    <VStack alignItems="start" width="65vw" px={10}>
                        <ArrowBackIcon  bgColor="#495E57" color="#EDEFEE" w={10} h={10} borderRadius="full"/>
                        <Heading size="xl" fontWeight="semibold" color="#333333">Brushetta</Heading>
                        <Text color="#333333" fontSize="lg" noOfLines={3}>
                            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.
                        </Text>
                        <HStack>
                            <VStack width="30vw" alignItems="start">
                                <HStack>
                                    <Image src= {img1} width="50px" height="50px" fit="cover" />
                                    <Text color="#333333" fontSize="md">Delivery Elasp: <p style={{ fontWeight:'bold', paddingLeft:'30px' }}>20 minutes</p></Text>
                                </HStack>
                            </VStack>
                        </HStack>
                        <p/><p/>
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
                            <MinusIcon color="#333333"/>
                            <Text color="#333333" fontSize="lg">1</Text>
                            <AddIcon color="#333333"/>
                        </HStack>
                        <Button bg='#F4CE14' color='#333333' alignSelf="center" width="full">
                            Add For $7.99
                        </Button>
                        <br/>
                    </VStack>
                </HStack>
            </VStack>
        </FullScreenSection>
    );
};

export default Order;
//<span style={{ fontWeight:'bold' }}>20 minutes</span>
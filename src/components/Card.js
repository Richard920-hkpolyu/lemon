import { Box,  Stack, HStack, Avatar, Heading, VStack, Flex, Button, FormControl, FormErrorMessage, FormLabel, Input, Select, Textarea, Text, Image, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogHeader, AlertDialogOverlay } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link, useNavigate  } from "react-router-dom";
const Card = ({ title, description, price, imageSrc }) => {
    const dataToPass = {
        title: title,
        description: description,
        price: price,
        imageSrc: imageSrc,
    };
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/order-online/order/${title}`, { state: dataToPass });
    };
    return(
        <HStack
            color="#333333"
            backgroundColor="#EDEFEE"
            cursor="pointer"
            borderWidth="1px"
            onClick={handleNavigate}
        >
            <VStack alignItems="start" width="65vw">
                <Heading size="xl" fontWeight="semibold" color="#333333">{title}</Heading>
                <Text color="#333333" fontSize="lg" noOfLines={3}>
                    {description}
                </Text>
                <Heading size="xl" fontWeight="medium" color="#333333">{price}</Heading>
            </VStack>
            <VStack>
                <Image width="40vw" height="40vh" borderRadius="xl" src={imageSrc} alt={title} fit="cover"/>
            </VStack>
        </HStack>

    );
};

export default Card;
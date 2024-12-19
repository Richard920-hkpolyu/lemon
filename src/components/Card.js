import { Box,  Stack, HStack, Avatar, Heading, VStack, Flex, Button, FormControl, FormErrorMessage, FormLabel, Input, Select, Textarea, Text, Image, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogHeader, AlertDialogOverlay } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { useFormik } from "formik";
import * as Yup from 'yup';
const Card = ({ title, description, price, imageSrc }) => {
    return(
        <HStack
            color="#333333"
            backgroundColor="#EDEFEE"
            cursor="pointer"
            borderWidth="1px"
        >
            <VStack alignItems="start" width="65vw">
                <Heading size="xl" fontWeight="semibold" color="#333333">{title}</Heading>
                <Text color="#333333" fontSize="lg" noOfLines={3}>
                    {description}
                </Text>
                <Heading size="xl" fontWeight="medium" color="#333333">{price}</Heading>
            </VStack>
            <VStack>
                <Image width="30vw" borderRadius="xl" src={imageSrc} alt={title} boxSize="300px"fit="cover"/>
            </VStack>
        </HStack>
    );
};

export default Card;
import { chakra, Box, HStack, Avatar, Heading, VStack, Flex, Button, FormControl, FormErrorMessage, FormLabel, Input, Select, Textarea, Text, Image, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogHeader, AlertDialogOverlay } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { extendTheme, theme as base } from "@chakra-ui/react";
const para1="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";
import img1 from "../images/Intro_Restauranfood.jpg";
import { ChevronRightIcon } from '@chakra-ui/icons'

const Introduction = () => {
    return(
        <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#495E57"
        >
            <HStack px={4} py={2} >
                <VStack alignItems="start">
                    <Heading size="3xl" fontWeight="bold" noOfLines={1} color="#F4CE14">Little Lemon</Heading>
                    <Heading size="2xl" fontWeight="semibold" noOfLines={1} color="#EDEFEE">Chicago</Heading>
                    <br/>
                    <Text fontSize="xl"  color="#EDEFEE" noOfLines={3}>{para1}</Text>
                    <br/>
                    <Button bg='#F4CE14' color='#333333'>
                        Reserve a table&nbsp; <ChevronRightIcon/>
                    </Button>
                </VStack>
                <Image src= {img1} boxSize="300px" borderRadius="full" fit="cover" />
            </HStack>
        </FullScreenSection>
    );
};

export default Introduction;
//<CloseButton size='sm' />from "@chakra-ui/react"
import { Box, HStack, Avatar, Heading, VStack, Flex, Button, FormControl, FormErrorMessage, FormLabel, Input, Select, Textarea, Text, Image, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogHeader, AlertDialogOverlay } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { useFormik } from "formik";
import * as Yup from 'yup';
//MenuSection
import MenuSection from "./MenuSection";
import img1 from "../images/Delivery.jpg";
const OrderOnline = () => {


    return (
        <div>
            <FullScreenSection
                justifyContent="center"
                alignItems="start"
                isDarkBackground
                backgroundColor="#495E57"
                minHeight="25vh"
            >
                <HStack>
                    <VStack alignItems="start" width="65vw">
                        <br/><br/>
                        <Heading size="2xl" fontWeight="semibold" noOfLines={1} color="#F4CE14">ORDER FOR DELIVERY!</Heading>
                        <Heading size="xl" fontWeight="medium" noOfLines={1} color="#EDEFEE">This Weeks Special!</Heading>
                    </VStack>
                    <VStack width="30vw"><br/><br/><Image src= {img1} width="150px" height="150px" fit="cover" /></VStack>
                </HStack>
            </FullScreenSection>
            <MenuSection />
        </div>
    );
};

export default OrderOnline;
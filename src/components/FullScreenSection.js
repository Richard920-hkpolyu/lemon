import { Box, HStack, Avatar, Heading, VStack, Flex, Button, FormControl, FormErrorMessage, FormLabel, Input, Select, Textarea, Text, Image, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogHeader, AlertDialogOverlay } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
    return (
       <VStack
        backgroundColor={boxProps.backgroundColor}
        color={isDarkBackground ? "white" : "black"}
       >
           <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
               {children}
           </VStack>
       </VStack>
    );
   };
export default FullScreenSection;
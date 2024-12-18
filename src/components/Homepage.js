import { chakra, Box, HStack, Avatar, Heading, VStack, Flex, Button, FormControl, FormErrorMessage, FormLabel, Input, Select, Textarea, Text, Image, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogHeader, AlertDialogOverlay } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { extendTheme, theme as base } from "@chakra-ui/react";
const para1="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";
import img1 from "../images/Intro_Restauranfood.jpg";
import { ChevronRightIcon } from '@chakra-ui/icons'
import Introduction from "./Introduction";

const Homepage = () => {
    return(
        <Introduction/>
    );
};

export default Homepage;
//<CloseButton size='sm' />from "@chakra-ui/react"
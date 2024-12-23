import { HStack, Heading, VStack, Button, Text, Image } from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "./FullScreenSection";
const para1="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";
import img1 from "../images/Intro_Restauranfood.jpg";
import { ChevronRightIcon } from '@chakra-ui/icons'
import {Link} from 'react-router-dom';

const Introduction = () => {
    return(
        <FullScreenSection
        justifyContent="center"
        alignItems="start"
        isDarkBackground
        backgroundColor="#495E57"
        >
            <HStack px={4} py={2} >
                <VStack alignItems="start" width="65vw">
                    <Heading size="3xl" fontWeight="bold" noOfLines={1} color="#F4CE14">Little Lemon</Heading>
                    <Heading size="2xl" fontWeight="semibold" noOfLines={1} color="#EDEFEE">Chicago</Heading>
                    <br/>
                    <Text fontSize="xl"  color="#EDEFEE" noOfLines={3}>{para1}</Text>
                    <br/>
                    <Button bg='#F4CE14' color='#333333'>
                        <Link to="/reservation">Reserve a table&nbsp; <ChevronRightIcon/></Link>
                    </Button>
                </VStack>
                <VStack>
                    <Image src= {img1} width="40vw" height="40vh" borderRadius="xl" fit="cover" />
                </VStack>
            </HStack>
        </FullScreenSection>
    );
};

export default Introduction;
//<CloseButton size='sm' />from "@chakra-ui/react"
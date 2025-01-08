import { HStack, Heading, VStack, Button, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "./FullScreenSection";
import img1 from "../images/small/Intro_Restaurantfood.jpg";
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Wave from 'react-wavify';
const para1 = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";

const Introduction = () => {
    const alignment = useBreakpointValue({
        base: "center", // Default alignment for mobile
        md: "center",   // Alignment for medium screens and up
        lg: "start",   // Alignment for large screens and up
    });
    return (
        <>
        <FullScreenSection
            justifyContent="center"
            alignItems="start"
            isDarkBackground
            backgroundColor="#495E57"
            borderRadius="md"
            minHeight={{ base: "50vh", md: "570px" }}
        >
            <HStack
                spacing={{ base: 4, md: 8 }} // Adjust spacing based on screen size
                flexDirection={{ base: "column", md: "row" }} // Stack vertically on mobile, horizontally on larger screens
            >
                <br/><br/>
                <VStack
                    alignItems={alignment}
                    width={{ base: "100%", md: "60vw", lg: "65vw" }} // Responsive width
                    py={{ base: 5, md: 10 }}
                    spacing={{ base: 3, md: 6 }}
                >
                    <Heading size={{ base: "lg", md: "2xl" }} fontWeight="bold" noOfLines={1} color="#F4CE14" alignSelf={alignment}>
                        Little Lemon
                    </Heading>
                    <Heading size={{ base: "md", md: "xl" }} fontWeight="semibold" noOfLines={1} color="#EDEFEE" alignSelf={alignment}>
                        Hong Kong
                    </Heading>
                    <Text fontSize={{ base: "md", md: "lg" }} color="#EDEFEE" noOfLines={3} align={alignment} width={{ md: "70%" }}>
                        {para1}
                    </Text>
                    <Link to="/reservation">
                        <Button colorScheme="yellow" width="xs" alignSelf={alignment}>
                            <span style={{ color: '#333333' }}>
                                Reserve a table&nbsp; <ChevronRightIcon />
                            </span>
                        </Button>
                    </Link>
                </VStack>
                <VStack>
                    <Image
                        src={img1}
                        width={{ base: "90vw", md: "40vw" }} // Full width on mobile, 40% on larger screens
                        height={{ base: "30vh", md: "50vh" }} // Adjust height based on screen size
                        borderRadius="xl"
                        fit="cover"
                        zIndex="100"
                        marginTop={{ base: "-20px", md: "0" }}
                        transition="all 0.4s linear"
                        _hover={{
                            transform: "scale(1.04)",
                            bg: "teal.600",
                        }}
                        _active={{
                            transform: "scale(1)",
                        }}
                        maxHeight="400px"
                        maxWidth="270px"
                        draggable="false"
                    />
                </VStack>
            </HStack>
        </FullScreenSection>
        <Wave fill='#495e57'
            paused={false}
            style={{ display: 'flex', transform: 'scaleY(-1)', marginTop: '-100px' }}
            options={{
            height: 20,
            amplitude: 20,
            speed: 0.15,
            points: 3
            }}
        />
        </>
    );
};

export default Introduction;


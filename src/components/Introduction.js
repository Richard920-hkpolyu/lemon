import { HStack, Heading, VStack, Button, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "./FullScreenSection";
import img1 from "../images/small/Intro_Restaurantfood.jpg";
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Wave from 'react-wavify';

const para1 = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";

const Introduction = () => {
    const alignment = useBreakpointValue({
        base: "center",
        md: "center",
        lg: "start",
    });

    return (
        <>
            <FullScreenSection
                justifyContent="center"
                alignItems="start"
                isDarkBackground
                backgroundColor="#495E57" // Fallback color
                backgroundImage={`url(${img1})`}
                backgroundSize="cover"
                backgroundPosition="center"
                borderRadius="md"
                minHeight={{ base: "50vh", md: "570px" }}
                zIndex="100"
                width={{ base: "100vw", md: "100vw", lg: "100vw" }}
            >
                    <br /><br />
                    <VStack
                        alignItems={alignment}
                        width="100%"
                        padding={{ base: 5, md: 10 }}
                        spacing={{ base: 3, md: 6 }}
                        backgroundColor="rgba(0, 0, 0, 0.5)"
                        borderRadius="md"
                    >
                        <Heading size={{ base: "lg", md: "2xl" }} fontWeight="bold" noOfLines={1} color="#F4CE14" alignSelf={alignment}>
                            Little Lemon
                        </Heading>
                        <Heading size={{ base: "md", md: "xl" }} fontWeight="semibold" noOfLines={1} color="#EDEFEE" alignSelf={alignment}>
                            Hong Kong
                        </Heading>
                        <Text fontSize={{ base: "md", md: "lg" }} color="#EDEFEE" noOfLines={3} align={alignment} width={{ md: "70%" }} fontStyle="italic">
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
            </FullScreenSection>
            <Wave
                fill='#495e57'
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
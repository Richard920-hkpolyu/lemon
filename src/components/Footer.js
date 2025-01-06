import { HStack, Heading, VStack, Text, Image, Box, SimpleGrid, useBreakpointValue, Badge} from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "./FullScreenSection";
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import Logo from "../images/footer_logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials, } from "../utils/data";
import { useScreenSize } from "../context/ScreenSizeContext";
const Introduction = () => {
    const { screenSize } = useScreenSize();
    const alignment = useBreakpointValue({
        base: "start", // Default alignment for mobile
        md: "start",   // Alignment for medium screens and up
        lg: "start",   // Alignment for large screens and up
    });
    const alignment2 = useBreakpointValue({
        base: "start", // Default alignment for mobile
        md: "center",   // Alignment for medium screens and up
        lg: "center",   // Alignment for large screens and up
    });
    const alignment3 = useBreakpointValue({
        base: "start", // Default alignment for mobile
        md: "flex-end",   // Alignment for medium screens and up
        lg: "flex-end",   // Alignment for large screens and up
    });
    return(
        <FullScreenSection
        justifyContent="center"
        alignItems="start"
        isDarkBackground
        backgroundColor="#495E57"
        minHeight="10vh"
        >
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={10} alignItems="center" width="99%">
                <VStack alignItems={alignment} width="100%">
                    <Image src={Logo} height="20vh"/>
                </VStack>
                <VStack alignItems={alignment2} width="100%">
                    <Text fontSize="md"  color="#EDEFEE" align={alignment2}><Badge variant="solid" colorScheme="green">© Copyright.</Badge></Text>
                    <Text fontSize="md"  color="#EDEFEE" align={alignment2}>Designed and developed by Richard NG for the capstone project of the Meta front-end developer professional certificate.</Text>
                </VStack>
                <VStack alignItems={alignment3} width="100%">
                    <Heading size="md" fontWeight="bold" color="#F4CE14">Contact</Heading>
                    <Text fontSize="md"  color="#EDEFEE">+ 86 18818902621&nbsp;<PhoneIcon/></Text>
                    <Text fontSize="md"  color="#EDEFEE">+ 852 5114 2452&nbsp;<PhoneIcon/></Text>
                    <Text fontSize="md"  color="#EDEFEE">ngtsangying@gmail.com&nbsp;<EmailIcon/></Text>
                    <HStack>
                    <nav>
                        <HStack spacing={4}>
                            {
                                socials.map(({ icon, url}) => (
                                    <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                                        <Box
                                            as="button"
                                            transition="all 0.2s linear"
                                            _hover={{
                                                transform: "translateY(-5px)",
                                            }}
                                            key={url}
                                            >
                                            <FontAwesomeIcon icon={icon} size="xl" />
                                        </Box>
                                    </a>
                                ))
                            }
                        </HStack>
                    </nav>
                    </HStack>
                </VStack>
            </SimpleGrid>
        </FullScreenSection>
    );
};

export default Introduction;
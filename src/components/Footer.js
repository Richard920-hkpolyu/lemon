import { HStack, Heading, VStack, Text, Image,} from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "./FullScreenSection";
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import Logo from "../images/footer_logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials, } from "../utils/data";

const Introduction = () => {
    return(
        <FullScreenSection
        justifyContent="center"
        alignItems="start"
        isDarkBackground
        backgroundColor="#495E57"
        minHeight="10vh"
        >
            <HStack px={4} py={2} gap="10">
                <VStack alignItems="start" width="10vw">
                    <Image src={Logo} width="5vw"/>
                </VStack>
                <VStack alignItems="start" width="35vw">
                    <Text fontSize="md"  color="#EDEFEE">© Copyright. All rights reserved.</Text>
                    <Text fontSize="md"  color="#EDEFEE">Designed and developed by Richard NG for the capstone project of the Meta front-end developer professional certificate.</Text>
                </VStack>
                <VStack alignItems="start" width="auto">
                    <Heading size="lg" fontWeight="bold" color="#F4CE14">Contact</Heading>
                    <Text fontSize="md"  color="#EDEFEE"><PhoneIcon/>&nbsp; + 234 9887654</Text>
                    <Text fontSize="md"  color="#EDEFEE"><PhoneIcon/>&nbsp; + 63 6378 637</Text>
                    <Text fontSize="md"  color="#EDEFEE"><EmailIcon/>&nbsp; eat@little_lemon.com</Text>
                    <HStack>
                    <nav>
                        <HStack spacing={4}>
                            {
                                socials.map(({ icon, url}) => (
                                    <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={icon} size="xl" key={url}/>
                                    </a>
                                ))
                            }
                        </HStack>
                    </nav>

                    </HStack>
                </VStack>
            </HStack>
        </FullScreenSection>
    );
};

export default Introduction;
//<CloseButton size='sm' />from "@chakra-ui/react"
import { SimpleGrid, Heading, VStack, HStack, Text, } from "@chakra-ui/react";
import React, { useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";
import { ChevronDownIcon } from '@chakra-ui/icons'
import { faLocationDot, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
const DeliveryAddress = () => {

    return (
        <>
            <FullScreenSection
                justifyContent="center"
                alignItems="start"
                isDarkBackground
                backgroundColor="#EDEFEE"
                minHeight="3rem"
                width="99vw"
                borderWidth="1px"
                borderRadius="lg"
                borderStyle="solid"
                padding="0.5rem"
                boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
            >
                <HStack width="100%" >
                    <VStack alignItems="start" width="100%">
                        <HStack>
                            <FontAwesomeIcon icon={faLocationDot} color="#333333"/>
                            <Text fontSize="lg" fontWeight="medium" color="#333333"align="start">410, 4 MAN FUK BUILDING, YUET WAH STREET 40, HONG KONG</Text>
                        </HStack>
                        <HStack>
                            <FontAwesomeIcon icon={faUser} color="#333333"/>
                            <Text fontSize="lg" color="#333333"align="start" width="10rem">Richard NG</Text>
                            <FontAwesomeIcon icon={faPhone} color="#333333"/>
                            <Text fontSize="lg" color="#333333"align="end">+ 188 1890 2621</Text>
                        </HStack>
                    </VStack>
                    <VStack alignItems="flex-end" width="1rem"><ChevronDownIcon w={5} h={5} color="#333333"/></VStack>
                </HStack>
            </FullScreenSection>
        </>
    );
};

export default DeliveryAddress;
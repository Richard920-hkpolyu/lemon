import { VStack, HStack, Text, } from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChevronDownIcon } from '@chakra-ui/icons'
import { faLocationDot, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
const DeliveryAddress = () => {

    return (
        <>
            <FullScreenSection
                justifyContent="center"
                alignItems="start"
                isDarkBackground
                backgroundColor="#FFFFFF"
                minHeight="3rem"
                borderWidth="1px"
                borderRadius="lg"
                borderStyle="solid"
                padding="0.5rem"
                width={{base: "91vw" , md: "93vw" }}
                boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
            >
                <HStack width="100%" >
                    <VStack alignItems="start" width="100%">
                        <HStack width="100%">
                            <FontAwesomeIcon icon={faLocationDot} color="#333333"/>
                            <Text fontSize="lg" fontWeight="medium" color="#333333"align="start">410, 4 MAN FUK BUILDING, YUET WAH STREET 40, HONG KONG</Text>
                        </HStack>
                        <HStack width="100%">
                            <FontAwesomeIcon icon={faUser} color="#333333"/>
                            <Text fontSize="lg" color="#333333"align="start"  width={{base:"7rem", md:"10rem"}}>Richard NG</Text>
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
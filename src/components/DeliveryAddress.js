import { VStack, HStack, Text, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faUser, faPhone, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { deliveryInfo } from "../utils/data";

const DeliveryAddress = () => {
    const [selectedDelivery, setSelectedDelivery] = useState(deliveryInfo[0] || { detailAdd: '', district: '', name: '', Tel: '' });
    const [addSelect, setAddSelect] = useState(1);

    const handleSelectChange = (info) => {
        setSelectedDelivery(info);
        setAddSelect(info.id);
    };

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
                width={{ base: "95vw", md: "92vw" }}
                boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
            >
                <Menu>
                    <MenuButton as={Button} rightIcon={<FontAwesomeIcon icon={faChevronDown} />} color="#333333" backgroundColor="#FFFFFF" width="100%" minHeight="3rem">
                        <VStack alignItems="start" width="100%">
                            <HStack width="100%">
                                <FontAwesomeIcon icon={faLocationDot} color="#333333"/>
                                <Text fontSize={{ base: "md", md: "lg" }} color="#333333" align="start" noOfLines={1} lineHeight={{ base: "shorter", md: "short" }}>
                                    {selectedDelivery.detailAdd}, {selectedDelivery.district}
                                </Text>
                            </HStack>
                            <HStack width="100%">
                                <FontAwesomeIcon icon={faUser} color="#333333"/>
                                <Text fontSize={{ base: "md", md: "lg" }} color="#333333" align="start" width={{ base: "7rem", md: "10rem" }} lineHeight={{ base: "shorter", md: "short" }}>
                                    {selectedDelivery.name}
                                </Text>
                                <FontAwesomeIcon icon={faPhone} color="#333333"/>
                                <Text fontSize={{ base: "md", md: "lg" }} color="#333333" align="end" lineHeight={{ base: "shorter", md: "short" }}>
                                    {selectedDelivery.Tel}
                                </Text>
                            </HStack>
                        </VStack>
                    </MenuButton>
                    <MenuList>
                        {deliveryInfo.map(info => (
                            <MenuItem key={info.id} id={info.id.toString()} onClick={() => handleSelectChange(info)} width="100%" minHeight="3rem">
                                <VStack alignItems="start" width="100%" _hover={{ bg: "#5B6E67", color: "#EDEFEE" }} borderRadius="lg" cursor="pointer" bg={addSelect === info.id ? "#5B6E67" : "#FFFFFF"} color={addSelect === info.id ? "#EDEFEE" : "#333333"} >
                                    <HStack width="100%">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <Text fontSize={{ base: "sm", md: "md" }} align="start" noOfLines={2} width={{ base: "82vw" }} lineHeight={{ base: "shorter", md: "short" }}>
                                            {info.detailAdd}, {info.district}
                                        </Text>
                                    </HStack>
                                    <HStack width="100%">
                                        <FontAwesomeIcon icon={faUser} />
                                        <Text fontSize={{ base: "sm", md: "md" }} align="start" width={{ base: "7rem", md: "10rem" }} lineHeight={{ base: "shorter", md: "short" }}>
                                            {info.name}
                                        </Text>
                                        <FontAwesomeIcon icon={faPhone} />
                                        <Text fontSize={{ base: "sm", md: "md" }} align="end" lineHeight={{ base: "shorter", md: "short" }}>
                                            {info.Tel}
                                        </Text>
                                    </HStack>
                                </VStack>
                            </MenuItem>
                        ))}
                        <VStack>
                            <Button color="#333333" alignSelf="center" width="100%">+ Add New Address</Button>
                        </VStack>
                    </MenuList>
                </Menu>
            </FullScreenSection>
        </>
    );
};

export default DeliveryAddress;
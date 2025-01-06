import { HStack, Heading, VStack, Image, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import MenuSection from "./MenuSection";
import { useScreenSize } from "../context/ScreenSizeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle, } from '@fortawesome/free-solid-svg-icons';
const OrderOnline = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const { setPage } = useScreenSize();
    useEffect(() => {
        setPage('orderonline');
        const scrollToTopTimeout = setTimeout(handleScrollToTop, 300);
        return () => clearTimeout(scrollToTopTimeout); // Cleanup timeout on unmount
    }, []);

    return (
        <>
            <FullScreenSection
                justifyContent="center"
                alignItems="start"
                isDarkBackground
                backgroundColor="#495E57"
                minHeight={{ base: "20vh", md: "25vh" }}
                width="100%"
                borderRadius="md"
            >
                <br/><br/>
                <SimpleGrid columns={2} alignItems="center" width="100%">
                    <VStack alignItems="start" width="100%">
                        <Heading size={{ base: "lg", md: "2xl" }} fontWeight="semibold" color="#F4CE14">ORDER FOR DELIVERY!</Heading>
                        <Heading size={{ base: "lg", md: "xl" }} fontWeight="medium" noOfLines={1} color="#EDEFEE">This Weeks Special!</Heading>
                    </VStack>
                    <VStack alignItems="flex-end" width="100%"><FontAwesomeIcon icon={faMotorcycle} size="5x"/></VStack>
                </SimpleGrid>
            </FullScreenSection>
            <MenuSection />
        </>
    );
};

export default OrderOnline;
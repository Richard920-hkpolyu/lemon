import { HStack, Heading, VStack, Image, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import MenuSection from "./MenuSection";
import img1 from "../images/Delivery.jpg";
const OrderOnline = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
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
                minHeight="25vh"
                width="100%"
            >
                <br/><br/>
                <SimpleGrid columns={2} alignItems="center" width="100%">
                    <VStack alignItems="start" width="100%">
                        <Heading size="2xl" fontWeight="semibold" noOfLines={1} color="#F4CE14">ORDER FOR DELIVERY!</Heading>
                        <Heading size="xl" fontWeight="medium" noOfLines={1} color="#EDEFEE">This Weeks Special!</Heading>
                    </VStack>
                    <VStack alignItems="flex-end" width="100%"><Image src= {img1} width="150px" height="150px" fit="cover" /></VStack>
                </SimpleGrid>
            </FullScreenSection>
            <MenuSection />
        </>
    );
};

export default OrderOnline;
import { Heading, VStack, Image, SimpleGrid} from "@chakra-ui/react";
import React, { useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import Order from "./Order";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle, } from '@fortawesome/free-solid-svg-icons';
const OrderPage = () => {
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
            minHeight={{ base: "20vh", md: "25vh" }}
            width="100%"
        >
            <br/><br/>
            <SimpleGrid columns={2} alignItems="center" width="100%">
                    <VStack alignItems="start" width="70vw">
                        <Heading size={{ base: "md", md: "2xl" }} fontWeight="semibold" color="#F4CE14">ORDER FOR DELIVERY!</Heading>
                    </VStack>
                    <VStack alignItems="flex-end" width="100%"><FontAwesomeIcon icon={faMotorcycle} size="5x"/></VStack>
                </SimpleGrid>
        </FullScreenSection>
        <Order/>
        </>
    );
};

export default OrderPage;
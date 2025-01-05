import { SimpleGrid, Heading, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import Cart from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";
import { useScreenSize } from "../context/ScreenSizeContext";
const CartPage = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const { setPage } = useScreenSize();
    useEffect(() => {
        setPage('cart');
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
                        <Heading size={{ base: "xl", md: "2xl" }} fontWeight="semibold" color="#F4CE14">CART FOR DELIVERY!</Heading>
                        <Heading size={{ base: "lg", md: "xl" }} fontWeight="medium" noOfLines={1} color="#EDEFEE">Final Check!</Heading>
                    </VStack>
                    <VStack alignItems="flex-end" width="100%"><FontAwesomeIcon icon={faOpencart} size="6x"/></VStack>
                </SimpleGrid>
            </FullScreenSection>
            <Cart />
        </>
    );
};

export default CartPage;
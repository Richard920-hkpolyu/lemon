import { HStack, Heading, VStack, Image, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import MenuSection from "./MenuSection";
import { useScreenSize } from "../context/ScreenSizeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle, } from '@fortawesome/free-solid-svg-icons';
import Wave from 'react-wavify';
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
                zIndex="100"
            >
                <br/><br/>
                <SimpleGrid columns={2} alignItems="center" width="100%">
                    <VStack alignItems="start" width="70vw">
                        <Heading size={{ base: "md", md: "2xl" }} fontWeight="semibold" color="#F4CE14">ORDER FOR DELIVERY!</Heading>
                        <Heading size={{ base: "md", md: "xl" }} fontWeight="medium" noOfLines={1} color="#EDEFEE">This Weeks Special!</Heading>
                    </VStack>
                    <VStack alignItems="flex-end" width="100%"><FontAwesomeIcon icon={faMotorcycle} size="5x"/></VStack>
                </SimpleGrid>
            </FullScreenSection>
            <Wave fill='#495e57'
                paused={false}
                style={{ display: 'flex', transform: 'scaleY(-1)', marginTop: '-100px' }}
                options={{
                height: 20,
                amplitude: 20,
                speed: 0.15,
                points: 3
                }}
            />
            <MenuSection />
        </>
    );
};

export default OrderOnline;
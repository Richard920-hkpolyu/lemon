import { SimpleGrid, Heading, VStack, } from "@chakra-ui/react";
import React, { useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import Reservation from "./Reservation.js";
import { useScreenSize } from "../context/ScreenSizeContext";
import Wave from 'react-wavify';
const ReservationPage = () => {
    const { setPage } = useScreenSize();
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        setPage('reservation');
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
                zIndex="100"
            >
                <br/><br/>
                <SimpleGrid columns={2} alignItems="center" width="100%">
                    <VStack alignItems="start" width="70vw">
                        <Heading size={{ base: "md", md: "xl" }} fontWeight="semibold" noOfLines={1} color="#F4CE14">Reservation</Heading>
                    </VStack>
                    <VStack alignItems="flex-end" width="100%"><FontAwesomeIcon icon={faBowlFood} size="5x"/></VStack>
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
            <Reservation />
        </>
    );
};

export default ReservationPage;
//<FontAwesomeIcon icon={faUser} />
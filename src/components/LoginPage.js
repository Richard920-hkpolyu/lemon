import { HStack, Heading, VStack, SimpleGrid,  } from "@chakra-ui/react";
import React, { useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood, faUser } from '@fortawesome/free-solid-svg-icons';
import { useScreenSize } from "../context/ScreenSizeContext";
const LoginPage = ({ isSignUp }) => {
    const { setPage } = useScreenSize();
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        setPage('login');
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
                    <VStack alignItems="start" width="100%">
                        <Heading size={{ base: "lg", md: "2xl" }} fontWeight="semibold" noOfLines={1} color="#F4CE14">{isSignUp ? "SIGN-UP" : "SIGN-IN"}</Heading>
                    </VStack>
                    <VStack alignItems="flex-end" width="100%"><FontAwesomeIcon icon={faBowlFood} size="5x"/></VStack>
                </SimpleGrid>
            </FullScreenSection>
        </>
    );
};

export default LoginPage;
//<FontAwesomeIcon icon={faUser} />
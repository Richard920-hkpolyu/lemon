import { HStack, Heading, VStack, Image, } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FullScreenSection from "./FullScreenSection";
import Order from "./Order";
import img1 from "../images/Delivery.jpg";
const OrderPage = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
      if (document.readyState === "complete") {
        setTimeout(() => {
          handleScrollToTop();
        }, 300);
    }

    return (
        <>
        <FullScreenSection
            justifyContent="center"
            alignItems="start"
            isDarkBackground
            backgroundColor="#495E57"
            minHeight="25vh"
        >
            <HStack>
                    <VStack alignItems="start" width="60vw">
                        <br/><br/>
                        <Heading size="2xl" fontWeight="semibold" noOfLines={1} color="#F4CE14">ORDER FOR DELIVERY!</Heading>
                    </VStack>
                    <VStack width="30vw"><br/><br/><Image src= {img1} width="150px" height="150px" fit="cover" /></VStack>
                </HStack>
        </FullScreenSection>
        <Order/>
        </>
    );
};

export default OrderPage;
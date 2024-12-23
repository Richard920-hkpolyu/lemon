import { VStack } from "@chakra-ui/react";
import React from "react";

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
    return (
       <VStack
        backgroundColor={boxProps.backgroundColor}
        color={isDarkBackground ? "white" : "black"}
       >
           <VStack maxWidth="1280px" minHeight="80vh" {...boxProps}>
               {children}
           </VStack>
       </VStack>
    );
   };
export default FullScreenSection;
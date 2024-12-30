import { HStack, Heading, VStack, Image,  } from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "./FullScreenSection";
import MenuSection from "./MenuSection";
import img1 from "../images/Delivery.jpg";
import Basket from "../images/Basket.svg";
import Cart from "./Cart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faOpencart} from "@fortawesome/free-brands-svg-icons";
const CartPage = () => {
    return (
        <div>
            <FullScreenSection
                justifyContent="center"
                alignItems="start"
                isDarkBackground
                backgroundColor="#495E57"
                minHeight="25vh"
            >
                <HStack>
                    <VStack alignItems="start" width="65vw">
                        <br/><br/>
                        <Heading size="2xl" fontWeight="semibold" noOfLines={1} color="#F4CE14">CART FOR DELIVERY!</Heading>
                        <Heading size="xl" fontWeight="medium" noOfLines={1} color="#EDEFEE">Final Check!</Heading>
                    </VStack>
                    <VStack width="30vw"><br/><br/><FontAwesomeIcon icon={faOpencart} size="6x"/></VStack>
                </HStack>
            </FullScreenSection>
            <Cart />
        </div>
    );
};

export default CartPage;
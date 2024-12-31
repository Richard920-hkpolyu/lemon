import { HStack, Heading, VStack, Image,  } from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "./FullScreenSection";
import Cart from "./Cart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faOpencart} from "@fortawesome/free-brands-svg-icons";
import { faBowlFood, faUser } from '@fortawesome/free-solid-svg-icons';
import Reservation from "./Reservation.js";
const ReservationPage = () => {
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
                        <Heading size="2xl" fontWeight="semibold" noOfLines={1} color="#F4CE14">Reservation</Heading>
                    </VStack>
                    <VStack width="30vw"><br/><br/><FontAwesomeIcon icon={faBowlFood} size="6x"/></VStack>
                </HStack>
            </FullScreenSection>
            <Reservation />
        </div>
    );
};

export default ReservationPage;
//<FontAwesomeIcon icon={faUser} />
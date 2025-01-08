import { VStack, HStack, Text, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlipay, faWeixin, faCcApplePay } from "@fortawesome/free-brands-svg-icons";
import { Radio, RadioGroup } from "@chakra-ui/react/radio"
import { payments, } from "../utils/data";
const Payment = () => {
    const [value, setValue] = useState("alipay");
    return (
        <>
            <FullScreenSection
                justifyContent="center"
                alignItems="start"
                isDarkBackground
                backgroundColor="#FFFFFF"
                minHeight="3rem"
                width={{base: "95vw" , md: "92vw" }}
                borderWidth="1px"
                borderRadius="lg"
                borderStyle="solid"
                boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
            >
                    <VStack alignItems="start" width="100%">
                    <RadioGroup color="#333333" borderColor="#333333" value={value} onChange={(e) => setValue(e)} width="100%">
                        {payments.map(pay => (
                            <HStack width="100%" key={pay.id}>
                                <FontAwesomeIcon icon={pay.icon} color="#333333" />
                                <label htmlFor={pay.id}>
                                    <Text fontSize={{base: "md" , md: "lg" }} color="#333333" align="start"width="70vw" lineHeight={{ base: "shorter", md: "short" }}>{pay.account}</Text>
                                </label>
                                <Spacer />
                                <Radio id={pay.id} value={pay.id} colorScheme="gray" borderColor="#333333" />
                            </HStack>
                        ))}
                    </RadioGroup>
                    </VStack>
            </FullScreenSection>
        </>
    );
};

export default Payment;
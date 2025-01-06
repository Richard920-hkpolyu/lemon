import { SimpleGrid, Heading, VStack, HStack, Text, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlipay, faWeixin, faCcApplePay } from "@fortawesome/free-brands-svg-icons";
import { ChevronDownIcon } from '@chakra-ui/icons'
import { faLocationDot, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Radio, RadioGroup } from "@chakra-ui/react/radio"
const Payment = () => {
    const [value, setValue] = useState("");
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
                padding="0.5rem"
                boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
            >
                    <VStack alignItems="start" width="100%">
                    <RadioGroup color="#333333" borderColor="#333333" value={value} onChange={(e) => setValue(e)} width="100%">
                        <HStack width="100%">
                            <FontAwesomeIcon icon={faAlipay} color="#333333" />
                            <label htmlFor="alipay">
                                <Text fontSize={{base: "md" , md: "lg" }} fontWeight="medium" color="#333333" align="start"> +852 5114 2452</Text>
                            </label>
                            <Spacer />
                            <Radio id="alipay" value="alipay" colorScheme="gray" borderColor="#333333" />
                        </HStack>
                        <HStack width="100%">
                            <FontAwesomeIcon icon={faWeixin} color="#333333" />
                            <label htmlFor="wechatpay">
                                <Text fontSize={{base: "md" , md: "lg" }} fontWeight="medium" color="#333333" align="start"> +86 188 1890 2621</Text>
                            </label>
                            <Spacer />
                            <Radio id="wechatpay" value="wechatpay" colorScheme="gray" borderColor="#333333" />
                        </HStack>
                        <HStack width="100%">
                            <FontAwesomeIcon icon={faCcApplePay} color="#333333" />
                            <label htmlFor="applepay">
                                <Text fontSize={{base: "md" , md: "lg" }} fontWeight="medium" color="#333333" align="start"> wuzhengying666@gmail.com</Text>
                            </label>
                            <Spacer />
                            <Radio id="applepay" value="applepay" colorScheme="gray" borderColor="#333333" />
                        </HStack>
                    </RadioGroup>

                    </VStack>
            </FullScreenSection>
        </>
    );
};

export default Payment;
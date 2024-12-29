import { HStack, Heading, VStack, Text, Image, } from "@chakra-ui/react";
import React from "react";
import { useNavigate,  } from "react-router-dom";
const Card = ({ id, title, category, type, monthly, description, price, imageSrc }) => {
    const dataToPass = {
        id: id,
        title: title,
        category: category,
        type: type,
        monthly: monthly,
        description: description,
        price: price,
        imageSrc: imageSrc,
    };
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/order-online/order/${title}`, { state: dataToPass });
    };
    return(
        <HStack
            color="#333333"
            backgroundColor="#EDEFEE"
            cursor="pointer"
            borderWidth="1px"
            borderRadius="md"
            onClick={handleNavigate}
            _hover={{borderWidth: "2px", borderColor:"#DADEDD"}}
        >
            <VStack alignItems="start" width="65vw">
                <Heading size="xl" fontWeight="semibold" color="#333333">{title}</Heading>
                <Text color="#333333" fontSize="lg" noOfLines={3}>
                    {description}
                </Text>
                <Heading size="xl" fontWeight="medium" color="#333333">{price}</Heading>
            </VStack>
            <VStack>
                <Image width="40vw" height="40vh" borderRadius="xl" src={imageSrc} alt={title} fit="cover"/>
            </VStack>
        </HStack>

    );
};

export default Card;
import { HStack, Heading, VStack, Text, Image, Button, Flex } from "@chakra-ui/react";
import React, { useEffect, useState,  } from "react";
import { useNavigate,  } from "react-router-dom";
import { DeleteIcon, AddIcon, MinusIcon, ArrowBackIcon} from '@chakra-ui/icons';
import { useScreenSize } from "../context/ScreenSizeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
const Card = ({ id, title, category, type, monthly, ingredients, description, price, imageSrc }) => {
    const dataToPass = {
        id: id,
        title: title,
        category: category,
        type: type,
        monthly: monthly,
        ingredients: ingredients,
        description: description,
        price: price,
        imageSrc: imageSrc,
    };
    const { modifyItems, items } = useScreenSize();
    const findCountById = (items, id) => {
        const item = items.find((item) => item.id === id);
        return item ? item.count : undefined;
    };
    const foundCount = findCountById(items, id);

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/order-online/order/${title.replace(/ /g, "")}`, { state: dataToPass });
    };
    const [count, setCount] = useState(foundCount !== undefined ? foundCount : 0);

    const handleIncrement = () => {
        setCount(count + 1);
      };
    const handleDecrement = () => {
        if (count > 0) {
          setCount(count - 1);
        }
    };

    useEffect(() => {
        modifyItems(id, count, ingredients);
    }, [id,count]);
    return(
        <HStack
            color="#333333"
            backgroundColor="#FFFFFF"
            borderWidth="1px"
            borderRadius="md"
            padding="8px"
        >
            <VStack alignItems="start" width={{ base: "50vw", md: "50vw" }}>
                <Heading size={{ base: "md", md: "lg" }} fontWeight="semibold" color="#333333" onClick={handleNavigate} cursor="pointer">{title}</Heading>
                <Text color="#333333" fontSize={{ base: "md", md: "lg" }} lineHeight={{ base: "shorter", md: "short" }}noOfLines={3}>
                    {description}
                </Text>
                <Flex justify="space-between" align="center" width="100%">
                    <Text size={{ base: "md", md: "lg" }} fontWeight="medium" color="#333333">{price}</Text>
                    {count > 0 && true ? (
                        <HStack alignSelf="center" gap={{ base: '5px', md: '8px' }}>
                            <Button onClick={handleDecrement} width={{ base: '4px' }}>
                                <FontAwesomeIcon icon={faMinus} color="#333333"/>
                            </Button>
                            <Text color="#333333" fontSize={{ base: 'md', md: 'lg' }}>{count}</Text>
                            <Button onClick={handleIncrement} width={{ base: '4px' }}>
                                <FontAwesomeIcon icon={faPlus} color="#333333"/>
                            </Button>
                        </HStack>
                    ) : (
                        <Button colorScheme="yellow" width="50%" onClick={handleIncrement}><span style={{ color: '#333333' }}>&nbsp;Add +&nbsp;</span></Button>
                    )}
                </Flex>
            </VStack>
            <VStack alignItems="start" width={{ base: "45vw", md: "100%" }}>
                <Image width={{ base: "45vw", md: "100%" }} maxWidth="300px" maxHeight="300px" height={{ base: "45vw", md: "" }} borderRadius="xl" src={imageSrc} alt={title} fit="cover" onClick={handleNavigate} loading="lazy" 
                    transition="all 0.4s linear"
                    _hover={{
                        transform: "scale(1.04)", bg: "teal.600",
                    }}
                    _active={{
                        transform: "scale(1)",
                    }}/>
            </VStack>
        </HStack>

    );
};

export default Card;
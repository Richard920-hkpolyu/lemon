import { HStack, Heading, VStack, Text, Image, Button, Flex } from "@chakra-ui/react";
import React, { useEffect, useState,  } from "react";
import { useNavigate,  } from "react-router-dom";
import { DeleteIcon, AddIcon, MinusIcon, ArrowBackIcon} from '@chakra-ui/icons';
import { useScreenSize } from "../context/ScreenSizeContext";
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
    const { modifyItems, items } = useScreenSize();
    const findCountById = (items, id) => {
        const item = items.find((item) => item.id === id);
        return item ? item.count : undefined;
    };
    const foundCount = findCountById(items, id);

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/order-online/order/${title}`, { state: dataToPass });
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

    //const { screenWidth } = useScreenSize().screenSize;
    

    useEffect(() => {
        //console.log("card effect", id, count);
        modifyItems(id, count);
    }, [id,count]);

    

    // useEffect(() => {
        
    //     setCount();
    // },[]);

    return(
        <HStack
            color="#333333"
            backgroundColor="#EDEFEE"
            cursor="pointer"
            borderWidth="1px"
            borderRadius="md"
            _hover={{borderWidth: "0 4px 8px 2px", borderColor:"#DADEDD"}}
            padding="8px"
        >
            <VStack alignItems="start" width="65vw">
                <Heading size="xl" fontWeight="semibold" color="#333333" onClick={handleNavigate}>{title}</Heading>
                <Text color="#333333" fontSize="lg" noOfLines={3}>
                    {description}
                </Text>
                <Flex justify="space-between" align="center" width="100%">
                    <Heading size="lg" fontWeight="medium" color="#333333">{price}</Heading>
                    {count > 0 && true ? (
                        <HStack alignSelf="center" gap={10}>
                            <Button onClick={handleDecrement}><MinusIcon color="#333333" /></Button>
                            <Text color="#333333" fontSize="lg">{count}</Text>
                            <Button onClick={handleIncrement}><AddIcon color="#333333" /></Button>
                        </HStack>
                    ) : (
                        <Button colorScheme="yellow" width="50%" onClick={handleIncrement}><span style={{ color: '#333333' }}>&nbsp;Add +&nbsp;</span></Button>
                    )}
                </Flex>
            </VStack>
            <VStack>
                <Image width="40vw" height="40vh" borderRadius="xl" src={imageSrc} alt={title} fit="cover" onClick={handleNavigate}/>
            </VStack>
        </HStack>

    );
};

export default Card;
//<Button colorScheme="yellow" width="50%" ><span style={{ color: '#333333' }}>&nbsp;Add +&nbsp;</span></Button>
/*
<br/>
                            <Button onClick={() => {deleteItems(id, count);}}><MinusIcon color="#333333" /></Button>
                            <Text color="#333333" fontSize="lg">{itemCount}</Text>
                            <Button onClick={() => {addItems(id, count);}}><AddIcon color="#333333" /></Button>
*/
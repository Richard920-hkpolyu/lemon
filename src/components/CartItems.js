import { HStack, Heading, VStack, Text, Image, Button, Flex } from "@chakra-ui/react";
import React, { useEffect, useState,  } from "react";
import { useNavigate,  } from "react-router-dom";
import { DeleteIcon, AddIcon, MinusIcon, ArrowBackIcon} from '@chakra-ui/icons';
import { useScreenSize } from "../context/ScreenSizeContext";
const CartItems = ({ id, title, category, type, monthly, description, price, imageSrc }) => {
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
    const findCountById = (items, id) => {
        const item = items.find((item) => item.id === id);
        return item ? item.count : undefined;
    };
    const { modifyItems, items } = useScreenSize();
    const foundCount = findCountById(items, id);
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
        //console.log("count",count);
        modifyItems(id, count);//rerender *2
    }, [id, count]);//rerender



    // useEffect(() => {
    //     //const foundCount = findCountById(items, id);
    //     //setCount(foundCount !== undefined ? foundCount : 0);
    // },[]);

    return(
        <HStack
            color="#333333"
            backgroundColor="#EDEFEE"
            cursor="pointer"
            borderWidth="1px"
            borderRadius="md"
            _hover={{borderWidth: "0 0 4px 2px", borderColor:"#DADEDD"}}
            justify="space-between"
            align="center"
            width="100%"
        >
            <VStack>
                <Image width="25vw" height="25vh" borderRadius="xl" src={imageSrc} alt={title} fit="cover" onClick={handleNavigate}/>
            </VStack>
            <VStack alignItems="start" width="40vw"px={10}>
                <Heading size="lg" fontWeight="semibold" color="#333333" onClick={handleNavigate}>{title}</Heading>
                <Text color="#333333" fontSize="lg" noOfLines={3}>
                    {type}
                </Text>
                <Flex justify="space-between" align="center" width="100%">
                    {count > 0 && true ? (
                        <HStack alignSelf="center" gap={10}>
                            <Button onClick={handleDecrement}><DeleteIcon color="#333333" /></Button>
                            <Text color="#333333" fontSize="lg">{count}</Text>
                            <Button onClick={handleIncrement}><AddIcon color="#333333" /></Button>
                        </HStack>
                    ) : (
                        console.log(`you remove the item ${title}`)
                    )}
                </Flex>
            </VStack>
            <VStack px={10}>
                <Heading size="lg" fontWeight="semibold" color="#FC2063">{(parseFloat(price.replace("$", ""))*count).toFixed(2)}</Heading>
            </VStack>
        </HStack>

    );
};

export default CartItems;
import { Box, HStack, Image, Menu,
    MenuButton,
    MenuList,
    MenuItem, useDisclosure, Button } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import React, { useEffect, useRef, useState} from "react";
import Logo from "../images/Header_Logo.svg";
import Basket from "../images/Basket.svg";
import {Link} from 'react-router-dom';
import { useScreenSize } from "../context/ScreenSizeContext";

const Header = () => {
    const headerRef = useRef(null);
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        let prevScrollPos = window.scrollY;
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const headerElement = headerRef.current;
            if(!headerElement){return;}
            if (prevScrollPos > currentScrollPos) {
                headerElement.style.transform = "translateY(0)";
            } else{
                headerElement.style.transform = "translateY(-200px)";
            }
            prevScrollPos = currentScrollPos;
        }
        window.addEventListener('scroll', handleScroll)//type, listener
        return () => {//在效果執行後清理占用的內存資源,加快應用響應速度.
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);//在效果完成後執行一次,第二個輸入項目是e.g.當[]改變時執行
//var handleClick = function(anchor) {
//  return function() {};
//};
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { items, } = useScreenSize();
    const totalCount = (items) => {
        return items.reduce((total, item) => total + item.count, 0);
    };
    useEffect(() => {
        //console.log("items222:",items);
        setCartCount(totalCount(items));
    },[items]);

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            background="#EDEFEE"
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            ref={headerRef}
            zIndex="modal"
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack py={2} justifyContent="space-between" alignItems="center">
                    <Menu isOpen={isOpen}>
                        <MenuButton
                            as={Button}
                            borderWidth='0px'
                            onMouseEnter={onOpen}
                            onMouseLeave={onClose}
                        >
                            <HamburgerIcon w={12} h={12} color="#333333"/>
                        </MenuButton>
                        <MenuList transitionDuration=".3s"transitionTimingFunction="ease-in-out" paddingBottom={5} color="#333333" minWidth='400px' borderWidth="1px" onMouseEnter={onOpen} onMouseLeave={onClose} onClick={onClose}>
                            <Link to="/"><MenuItem _hover={{color:"#EDEFEE", backgroundColor:"#333333"}}>Homepage</MenuItem></Link>
                            <Link to="/reservation"><MenuItem _hover={{color:"#EDEFEE", backgroundColor:"#333333"}}>Reserve a Table</MenuItem></Link>
                            <Link to="/order-online"><MenuItem _hover={{color:"#EDEFEE", backgroundColor:"#333333"}}>Order Online</MenuItem></Link>
                            <Link to="/login"><MenuItem _hover={{color:"#EDEFEE", backgroundColor:"#333333"}}>Login</MenuItem></Link>
                        </MenuList>
                    </Menu>
                    <Link to="/"><Image src={Logo}/></Link>
                    <Link to="/cart">
                        <HStack>
                            <Image src={Basket}/>
                            {cartCount > 0 ? (
                                <span style={{ color: "#EDEFEE", padding: "0.1rem 0.45rem 0.2rem", top:"-1rem", right:"-0.01rem", backgroundColor: "#FC2063", borderRadius:"9px 8px 8px 0px", fontSize:"1rem", fontWeight:"bold", position:"relative", }}>{cartCount}</span>
                            ) : null}
                        </HStack>
                    </Link>
                </HStack>
            </Box>
        </Box>
    );
};

export default Header;
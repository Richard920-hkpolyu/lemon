import { Box, HStack, VStack, Image, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, CloseButton, useDisclosure, Button } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import React, { useEffect, useRef, } from "react";
import Logo from "../images/Header_Logo.svg";
import Basket from "../images/Basket.svg";
import {Link} from 'react-router-dom';
const Header = () => {
    const headerRef = useRef(null);
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
                            <MenuItem>
                                <Link to="/">Homepage</Link>
                            </MenuItem>
                            <MenuItem>
                            <Link to="/reservation">Reserve a Table</Link>
                            </MenuItem>
                            <MenuItem>
                            <Link to="/order-online">Order Online</Link>
                            </MenuItem>
                            <MenuItem>
                                Sign In
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Link to="/"><Image src={Logo}/></Link>
                    <Link to="/order-online"><Image src={Basket}/></Link>
                </HStack>
            </Box>
        </Box>
    );
};

export default Header;
import { Box, HStack, Image, Menu,
    MenuButton,
    MenuList,
    MenuItem, useDisclosure, Button } from "@chakra-ui/react";
import React, { useEffect, useRef, useState} from "react";
import Logo from "../images/Header_Logo.png";
import {Link} from 'react-router-dom';
import { useScreenSize } from "../context/ScreenSizeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faHouse, faBars, faBowlFood, faTruck,faUser } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const headerRef = useRef(null);
    const [cartCount, setCartCount] = useState(0);
    const handleClick = () => {
        isOpen ? onClose() : onOpen();
    };
    useEffect(() => {
        let prevScrollPos = window.scrollY;
        const threshold = 120;
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const headerElement = headerRef.current;
            if (!headerElement) return;
            // Check if the user is at the top of the page
            if (currentScrollPos < threshold) {
                headerElement.style.transform = "translateY(0)";
            } else if (prevScrollPos > currentScrollPos) {
                headerElement.style.transform = "translateY(0)";
            } else {
                headerElement.style.transform = "translateY(-200px)";
            }
            prevScrollPos = currentScrollPos;
        };
        window.addEventListener('scroll', handleScroll); // type, listener
        return () => { // Clean up resources to improve app responsiveness
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);//在效果完成後執行一次,第二個輸入項目是e.g.當[]改變時執行
//var handleClick = function(anchor) {
//  return function() {};
//};
    // const handleClick = (anchor) => () => {
    //     const id = `${anchor}-section`;
    //     const element = document.getElementById(id);
    //     if(element){
    //         element.scrollIntoView({
    //             behavior: "smooth",
    //             block: "start",
    //         });
    //     }
    // };
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { items, page } = useScreenSize();
    const totalCount = (items) => {
        return items.reduce((total, item) => total + item.count, 0);
    };
    useEffect(() => {
        //console.log("items222:",items);
        setCartCount(totalCount(items));
        headerRef.current.style.transform = "translateY(0)";
    },[items]);

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            color="#333333"
            background="#FFFFFF"
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
                            onClick={handleClick}
                        >
                            <FontAwesomeIcon icon={faBars} color="#333333" size="2x"/>
                        </MenuButton>
                        <MenuList
                            transition="opacity 0.3s ease-in-out, transform 0.3s ease-in-out"
                            transform={isOpen ? 'translateY(0)' : 'translateY(-10px)'}
                            paddingBottom={5}
                            color="#333333"
                            minWidth={{ base: '100vw', md: '400px' }}
                            onMouseEnter={onOpen}
                            onMouseLeave={onClose}
                            onClick={onClose}>
                            <Link to="/"><MenuItem borderRadius="lg" _hover={{color:"#EDEFEE", backgroundColor:"#333333"}} backgroundColor={page === 'homepage' ? "#333333" : null} color={page === 'homepage' ? "#FFFFFF" : null}><FontAwesomeIcon icon={faHouse} size="1x"/>&nbsp;Homepage</MenuItem></Link>
                            <Link to="/reservation"><MenuItem borderRadius="lg" _hover={{color:"#EDEFEE", backgroundColor:"#333333"}} backgroundColor={page === 'reservation' ? "#333333" : null} color={page === 'reservation' ? "#FFFFFF" : null}><FontAwesomeIcon icon={faBowlFood} size="1x"/>&nbsp;Reserve a Table</MenuItem></Link>
                            <Link to="/order-online"><MenuItem borderRadius="lg" _hover={{color:"#EDEFEE", backgroundColor:"#333333"}} backgroundColor={page === 'orderonline' ? "#333333" : null} color={page === 'orderonline' ? "#FFFFFF" : null}><FontAwesomeIcon icon={faTruck} size="1x"/>&nbsp;Order Online</MenuItem></Link>
                            <Link to="/cart"><MenuItem borderRadius="lg" _hover={{color:"#EDEFEE", backgroundColor:"#333333"}} backgroundColor={page === 'cart' ? "#333333" : null} color={page === 'cart' ? "#FFFFFF" : null}><FontAwesomeIcon icon={faBasketShopping} size="1x"/>&nbsp;Cart</MenuItem></Link>
                            <Link to="/login"><MenuItem borderRadius="lg" _hover={{color:"#EDEFEE", backgroundColor:"#333333"}} backgroundColor={page === 'login' ? "#333333" : null} color={page === 'login' ? "#FFFFFF" : null}><FontAwesomeIcon icon={faUser} size="1x"/>&nbsp;Login</MenuItem></Link>
                        </MenuList>
                    </Menu>
                    <Link to="/"><Image src={Logo} width="160px" height="42px"fit="cover"/></Link>
                    <Link to="/cart">
                        <HStack px='10px'>
                            <FontAwesomeIcon icon={faBasketShopping} color="#333333" size="2x"/>
                            {cartCount > 0 ? (
                                <span style={{ color: "#EDEFEE", padding: "0.1rem 0.45rem 0.2rem", top:"-0.8rem", right:"0.2rem", backgroundColor: "#FC2063", borderRadius:"9px 8px 8px 0px", fontSize:"1rem", fontWeight:"bold", position:"relative", }}>{cartCount}</span>
                            ) : null}
                        </HStack>
                    </Link>
                </HStack>
            </Box>
        </Box>
    );
};

export default Header;
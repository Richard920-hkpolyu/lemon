import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faMedium, faStackOverflow} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
    {
        icon: faEnvelope,
        url: "mailto: hello@example.com",
    },
    {
        icon: faGithub,
        url: "https://www.github.com/sureskills",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/sureskills/",
    },
    {
        icon: faMedium,
        url: "https://medium.com/@sureskills",
    },
    {
        icon: faStackOverflow,
        url: "https://stackoverflow.com/users/sureskills",
    },
];
//px sets the padding on both the left and right sides
//py sets the padding on both the top and bottom sides
const Header = () => {
//var Header = function() {};
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

    return(
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            backgroundColor="#18181b"
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            ref={headerRef}
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
                    <nav>
                        <HStack spacing={8}>
                            {
                                socials.map(({ icon, url}) => (
                                    <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={icon} size="2x" key={url}/>
                                    </a>
                                ))
                            }
                        </HStack>
                    </nav>
                    <nav>
                        <HStack spacing={8}>
                            <a href="#projects" onClick={handleClick("projects")}>Projects</a>
                            <a href="#contactme" onClick={handleClick("contactme")}>Contact Me</a>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    );
};

export default Header;
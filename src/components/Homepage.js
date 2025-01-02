import React from "react";
import Introduction from "./Introduction";
import MenuSection from "./MenuSection";
const Homepage = () => {
    const handleScrollToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          };
        
          if (document.readyState === "complete") {
            setTimeout(() => {
              handleScrollToTop();
            }, 300);
        }
    return(
        <div>
            <Introduction />
            <MenuSection />
        </div>
    );
};

export default Homepage;
//<CloseButton size='sm' />from "@chakra-ui/react"
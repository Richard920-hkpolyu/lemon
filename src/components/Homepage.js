import React, { useEffect } from "react";
import Introduction from "./Introduction";
import MenuSection from "./MenuSection";
const Homepage = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const scrollToTopTimeout = setTimeout(handleScrollToTop, 300);
        return () => clearTimeout(scrollToTopTimeout); // Cleanup timeout on unmount
    }, []);

    return(
        <div>
            <Introduction />
            <MenuSection />
        </div>
    );
};

export default Homepage;
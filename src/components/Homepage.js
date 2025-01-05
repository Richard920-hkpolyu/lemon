import React, { useEffect } from "react";
import Introduction from "./Introduction";
import MenuSection from "./MenuSection";
import { useScreenSize } from "../context/ScreenSizeContext";
const Homepage = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const { setPage } = useScreenSize();
    useEffect(() => {
        setPage('homepage');
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
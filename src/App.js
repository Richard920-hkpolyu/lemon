//import About from "./components/About";
//import Footer from "./components/Footer";
//import Header from "./components/Header";
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const AppRoutes = lazy(() => import("./routes/AppRoutes"));
import React, { Suspense, lazy, useEffect } from "react";
import { AlertProvider } from "./context/alertContext";
import { ChakraProvider } from "@chakra-ui/react";
import Lenis from '@studio-freight/lenis';
import Loading from "./components/Loading";



const App=()=> {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    // Cleanup function
    return () => {
      // If Lenis has a destroy method, call it here
      lenis.destroy();
    };
  }, []);

  return(
    <>
      <Suspense fallback={<Loading />}>
        <ChakraProvider>
          <AlertProvider>
            <Header/>
            <AppRoutes />
            <Footer/>
          </AlertProvider>
      </ChakraProvider>
      </Suspense>
    </>
  );
}

export default App;

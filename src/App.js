//import About from "./components/About";
//import Footer from "./components/Footer";
//import Header from "./components/Header";
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const AppRoutes = lazy(() => import("./routes/AppRoutes"));
const Alert = lazy(() => import("./components/Alert"));
const Loading = lazy(() => import("./components/Loading"));
import React, { Suspense, lazy, useEffect } from "react";
import { AlertProvider } from "./context/alertContext";
import { ChakraProvider } from "@chakra-ui/react";
import Lenis from '@studio-freight/lenis';

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
    <ChakraProvider>
      <Suspense fallback={<Loading />}>
        <AlertProvider>
          <Header />
          <AppRoutes />
          <Footer />
          <Alert />
        </AlertProvider>
      </Suspense>
    </ChakraProvider>
  );
}

export default App;

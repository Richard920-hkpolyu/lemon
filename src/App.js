import About from "./components/About";
import Card from "./components/Card";
import Footer from "./components/Footer";
import FullScreenSection from "./components/FullScreenSection";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Introduction from "./components/Introduction";
import MenuSection from "./components/MenuSection";
import OrderOnline from "./components/OrderOnline";
import Payment from "./components/Payment";
import Reservation from "./components/Reservation";
import SignIn from "./components/SignIn";
import {Routes, Route, Link} from 'react-router-dom';

import { Box, HStack, Image } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import Menu from "./images/Hamburger_Menu.svg";
import Logo from "./images/Header_Logo.svg";
import Basket from "./images/Basket.svg";
import { AlertProvider } from "./context/alertContext";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return(
    <ChakraProvider>
      <AlertProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/reservation" element={<Reservation />}></Route>
          <Route path="/order-online" element={<OrderOnline />}></Route>
        </Routes>
        <Footer/>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;

//import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Order from "./components/Order";
import OrderOnline from "./components/OrderOnline";
//import Payment from "./components/Payment";
import Reservation from "./components/Reservation";
//import SignIn from "./components/SignIn";
import {Routes, Route, Link} from 'react-router-dom';
import React from "react";
import { AlertProvider } from "./context/alertContext";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return(
    <ChakraProvider>
      <AlertProvider>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route path="/reservation" element={<Reservation />}></Route>
          <Route path="/order-online" element={<OrderOnline />}></Route>
          <Route path="/order-online/order/:dish" element={<Order />}></Route>
        </Routes>
        <Footer/>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;

import React from "react";
import Homepage from "../components/Homepage";
import OrderPage from "../components/OrderPage";
import OrderOnline from "../components/OrderOnline";
//import Payment from "./components/Payment";
import ReservationPage from "../components/ReservationPage";
import CartPage from "../components/CartPage";
//import SignIn from "./components/SignIn";
import {Routes, Route, } from 'react-router-dom';
import NotFound from "../components/NotFound";
import Login from "../components/Login";
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/reservation" element={<ReservationPage />}></Route>
                <Route path="/order-online" element={<OrderOnline />}></Route>
                <Route path="/order-online/order/:dish" element={<OrderPage />}></Route>
                <Route path="/cart" element={<CartPage />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </>
    );
};

export default AppRoutes;
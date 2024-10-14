import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Laptops from "./Pages/Laptops";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Mobiles from "./Pages/Mobiles";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import SearchItem from "./Pages/SearchItem";
import ShopContextProvider from "./components/shopContext";
import Checkout from "./Pages/checkout";
import PaymentComponent from "./Pages/PaymentComponent";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PaymentDetails from "./Pages/Dashboard/PaymentDetails";
import Orders from "./Pages/Dashboard/Orders";
import Favorites from "./Pages/Dashboard/Favorites";
import AcountInfo from "./Pages/Dashboard/AcountInfo";

const App = () => {
  return (
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/search/:term" element={<SearchItem />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/PaymentComponent" element={<PaymentComponent />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/payment-methods" element={<PaymentDetails />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/account-info" element={<AcountInfo />} />
        </Routes>
      </Router>
    </ShopContextProvider>
  );
};

export default App;

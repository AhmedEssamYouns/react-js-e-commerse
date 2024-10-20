
import React, { useState, useEffect } from "react";
import HomePage from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Allproducts from "./pages/Products/AllProducts";
import SinglePro from "./pages/Products/SingleProduct/singlePro";
import User from "./pages/user/User";
import Login from "./pages/singin/up/signIN";
import Signup from "./pages/singin/up/signUP";
import ScrollToTop from "./Assists/ScrollToTop";
import Preloader from "../src/Assists/Pre";
import Cart from "./pages/cart/cart";
import Fotter from "./compenets/fotter/fotter";
import Nav from "./compenets/Navbar/Navbar";
import Cheak from "./pages/cheackout/cheak";
import ProductList from "./pages/Products/ProductList";
import SearchList from "./pages/search/SeachList";
import Category from "./compenets/Category/cat";
import Start from "./pages/startPage/start";
import ContactUS from "./pages/contact/Contact";
import Add from "./Assists/Add";
import ReactLoading from "react-loading";


const App = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    
    <div className="App">
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <ScrollToTop />
          <Nav />
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/cont" element={<ContactUS />} />
            <Route path="/categ" element={<Category />} />
            <Route path="/pro/:searched" element={<SearchList />} />
            <Route path="/:category" element={<ProductList />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/pro/Laptop" element={<Allproducts />} />
            <Route path="/test/:id" element={<SinglePro />} />
            <Route path="/info" element={<SinglePro />} />
            <Route path="/profile" element={<User />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cheack" element={<Cheak />} />
            <Route path="/Add" element={<Add />} />

          </Routes>
          <Fotter />
        </div>
      </Router>
    </div>
  );
};

export default App;

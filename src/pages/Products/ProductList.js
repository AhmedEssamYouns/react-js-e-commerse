import { Fragment } from "react";
import React from "react";
import ProductCard from "./ProductCard";
import { DataPro } from "./data";
import "./Home.css";
import { useLocation } from "react-router-dom";
import ProductsMap from "./ProductMap";

function ProductList() {

    const location = useLocation();
    const name = location.pathname.split("/")[1];

    return (
        <Fragment>    
            <ProductsMap cat={name} /> 
        </Fragment>
    )
}
export default ProductList;
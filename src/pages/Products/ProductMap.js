import { Fragment } from "react";
import React from "react";
import Nav from "../../compenets/Navbar/Navbar";
import { Link } from "react-router-dom";
import Category from "../../compenets/Category/cat";
import Fotter from "../../compenets/fotter/fotter";
import Filter from "../../compenets/filter/filter";
import ProductCard from "./ProductCard";
import { DataPro } from "./data";
import { useState } from "react";

import "./Home.css";




const ProductsMap = ({ cat }) => {
    const [Price, setPrice] = useState(1000);
    if (Price == 0) { setPrice(1000) }
    console.log(Price)

    const [Sort, setSort] = useState(1);

    const ALL = () => {
        setSort(1)
    }
    const lowToHigh = () => {
        setSort(2)
    }
    const HighToLow = () => {
        setSort(3)
    }

    if (Sort == 1) {
        var dataMap =
            DataPro.sort((a, b) => parseFloat(a.id) - parseFloat(b.id)).filter((DataPro) => DataPro.Category == cat && DataPro.price <= Price).map((DataPro) => {
                return (<ProductCard DataPro={DataPro} key={DataPro.id} />)
            })
    }
    else if (Sort == 2) {
        dataMap =
            DataPro.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)).filter((DataPro) => DataPro.Category == cat && DataPro.price <= Price).map((DataPro) => {
                return (<ProductCard DataPro={DataPro} key={DataPro.id} />)
            })

    }
    else if (Sort == 3) {
        dataMap =
            DataPro.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)).filter((DataPro) => DataPro.Category == cat && DataPro.price <= Price).map((DataPro) => {
                return (<ProductCard DataPro={DataPro} key={DataPro.id} />)
            })
    }


    return (
        <Fragment>

            <section class="product" id="product">
                <h1 class="heading" style={{ marginTop: "10px" }}>{cat} <span>Category</span></h1>
                <div Class="Wrapper">

                    <div Id="Search-Container">
                        <input
                            type="number"
                            Id="Search-Input"
                            Placeholder="Set a Maximum Price .."
                            min={0}
                            onChange={(e) => setPrice(e.target.value)}

                        ></input>


                    </div>
                    <div Id="Buttonss">
                        <h2>Sort by Maximum price you want <span ><p className="fas fa-angle-double-right"></p></span> founded<span className="rkm"> {dataMap.length}</span> products</h2><br></br>
                        <button className="btn" id="aywa" onClick={lowToHigh}  ><b>low to high </b></button>
                        <button className="btn" id="aywa" onClick={HighToLow}   ><b>high to low </b></button>

                    </div>
                    <div Id="Products"></div>
                </div>

                <div class="box-container">

                    {dataMap}

                </div>


            </section>

        </Fragment >);
}
export default ProductsMap;

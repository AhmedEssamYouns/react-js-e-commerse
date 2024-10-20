import { Fragment } from "react";
import React from "react";
import ProductCard from "./ProductCard";
import { DataPro } from "./data";
import { useState } from "react";
import { Refresh } from "@mui/icons-material";
import { useEffect } from "react";





function Allproducts() {


    const [Price, setPrice] = useState("1000");
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



    if (Price == 0) { setPrice(1000) }
    console.log(Price)
    if (Sort == 1) {
        var dataMap =
            DataPro.sort((a, b) => parseFloat(a.id) - parseFloat(b.id)).filter((DataPro) => DataPro.price <= Price).map((DataPro) => {
                return (<ProductCard DataPro={DataPro} key={DataPro.id} />)

            })
    }
    else if (Sort == 2) {
        dataMap =
            DataPro.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)).filter((DataPro) => DataPro.price <= Price).map((DataPro) => {
                return (<ProductCard DataPro={DataPro} key={DataPro.id} />)
            })


    }
    else if (Sort == 3) {
        dataMap =
            DataPro.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)).filter((DataPro) => DataPro.price <= Price).map((DataPro) => {
                return (<ProductCard DataPro={DataPro} key={DataPro.id} />)
            })


    }

    return (
        <Fragment>


            <section class="product" id="product">



                <h1 class="heading" style={{ marginTop: "10px" }}>All <span>products</span></h1>
                <div Class="Wrapper">

                    <div Id="Search-Container" >
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
                        <button className="btn" id="aywa" onClick={ALL} ><b> by Category </b> </button>
                        <button className="btn" id="aywa" onClick={lowToHigh}> <b> low to high </b> </button>
                        <button className="btn" id="aywa" onClick={HighToLow}   > <b>  high to low </b> </button>



                    </div>
                    <div Id="Products"></div>
                </div>
                <div className="box-container">
                    {dataMap}
                </div>
            </section>

            <a href="#" class="fas fa-arrow-up" id="scroll-top"></a>


        </Fragment >);
}
export default Allproducts;





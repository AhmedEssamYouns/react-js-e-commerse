import { Fragment } from "react";
import React from "react";
import { useState } from "react";
import "./style.css";

function Filter() {
    const [Price, setPrice] = useState("");

    return (
        <Fragment>

            <div Class="Wrapper">

                <div Id="Search-Container">
                    <input
                        type="number"
                        Id="Search-Input"
                        Placeholder="Search by price .."
                        min={0}
                        onChange={(e) => setPrice(e.target.value)}
                    ></input>

                    <button Id="Search">Search&ensp;<p className="fas fa-search-dollar"></p></button>
                </div>
                <div Id="Buttonss">
                    <h2>Sort by price <span ><p className="fas fa-angle-double-right"></p></span></h2><br></br>

                    <button Class="Button-Value" Onclick="FilterProduct('Topwear')">
                       <b> high to low</b>
                    </button>
                    <button Class="Button-Value" Onclick="FilterProduct('Bottomwear')">
                   <strong>low to high</strong> 
                    </button>


                </div>
                <div Id="Products"></div>
            </div>

        </Fragment >);
}
export default Filter;

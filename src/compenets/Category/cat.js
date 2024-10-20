import { Fragment } from "react";
import React from "react";
import Nav from "../../compenets/Navbar/Navbar";
import { Link } from "react-router-dom";




function Category() {
    return (
        <Fragment>

            <section class="category" id="category">

                <h1 class="heading">shop by <span>category</span></h1>

                <div class="box-container">

                    <div class="box">
                        <h3>iPhone</h3>
                        <p>upto 50% off</p>
                        {/* <img src={require("../../pages/Products/images/1.jpg")} alt="" /> */}
                        <Link to="/iphone" class="btn">shop now</Link>
                    </div>
                    <div class="box">
                        <h3>Mac</h3>
                        <p>upto 44% off</p>
                        
                        <Link to="/mac" class="btn">shop now</Link>

                    </div>
                    <div class="box">
                        <h3>watchs</h3>
                        <p>upto 12% off</p>
                       
                        <Link to="/watchs" class="btn">shop now</Link>

                    </div>

                </div>

            </section>

        </Fragment >);
}
export default Category;
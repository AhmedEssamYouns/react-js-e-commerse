import { Fragment } from "react";
import React from "react";
import { DataPro } from "../Products/data";
import { Link } from "react-router-dom";
import ProductCard from "../Products/ProductCard";
import "./Home.css";
import Category from "../../compenets/Category/cat";
import ContactUS from "../contact/Contact";

function HomePage() {
    const dataMap =
        DataPro.filter((DataPro) => DataPro.fetch == "yes").map((DataPro) => {
            return (<ProductCard DataPro={DataPro} key={DataPro.id} />)
        });

    return (
        <Fragment>



            <section class="home" id="home">
                <div class="content" id="az" style={{ marginTop: "100px" }}>

                    <h3>apple<b>store</b></h3>

                </div>

                <div class="image" style={{ marginTop: "25px" }} >
                    <img src={require("./images/wall.jpg")} alt="" />
                </div>

                <div class="content" style={{ marginTop: "100px" }}>
                    <span>don't waste the chance</span>
                    <h3>Choose what works for you</h3>
                    <Link to="/" class="btn"><b>get started</b></Link>
                </div>

            </section>

            {/* <!-- home section ends -->
*/}


            {/*
<!-- category section starts  --> */}
            <section class="product" id="popop">
                <Category />
                <br />
                <br />
                <br />
                <br />


                <h1 class="heading" >featured<span> Products</span></h1>
                <div class="box-container">
                    {dataMap}
                </div>
                <ContactUS />

            </section>
            {/* <!-- category section ends -->

<
<!-- contact section starts  --> */}





            <a href="#" class="fas fa-arrow-up" id="scroll-top"></a>


        </Fragment >);
}
export default HomePage;
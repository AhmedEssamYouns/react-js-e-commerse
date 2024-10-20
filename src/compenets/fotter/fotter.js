import { Fragment } from "react";
import React from "react";
import { Link } from "react-router-dom";

import "./fotter.css";

function Fotter() {
    return (
        <Fragment>


            <section class="footer">

                <div class="box-container">

                    <div class="box">
                        <a class="logo">apple<span className="kkp">store</span></a>
                        <p>The best in the west!</p>
                        <div class="share">
                            <a style={{ marginLeft: "2px" }} class="btn fab fa-facebook-f"></a>
                            <a style={{ marginLeft: "2px" }} class="btn fab fa-twitter"></a>
                            <a style={{ marginLeft: "2px" }} class="btn fab fa-instagram"></a>
                            <a style={{ marginLeft: "2px" }} class="btn fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div class="box">
                        <h3>our location</h3>
                        <div class="links">
                            <a>Egypt</a>
                            <a>USA</a>
                            <a>france</a>
                            <a>japan</a>
                            <a>russia</a>
                        </div>
                    </div>

                    <div class="box">
                        <h3>quick links</h3>
                        <div class="links">
                            <Link to={"/profile"}>Profile</Link>
                            <Link to={"/home"}>home</Link>
                            <Link to={"/cart"}>My cart</Link>
                            <Link to={"/categ"}>category</Link>
                            <Link to={"/pro/LapTop"}>products</Link>
                            <Link to={"/cont"}>contact</Link>
                        </div>
                    </div>

                    <div class="box">
                        <h3>download app</h3>
                        <div class="links">
                            <a>google play</a>
                            <a>for pc</a>
                            <a>app store</a>
                        </div>
                    </div>

                </div>

                <h1 class="credit"> created by <span> Ahmed essam</span> | all rights reserved! </h1>

            </section>



        </Fragment >);
}
export default Fotter;
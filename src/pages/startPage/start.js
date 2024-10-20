import { Fragment } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Start() {
    return (
        <Fragment>


            <div class="colm-form">
                <div class="form-container" id="gh">
                    <form >
                        <h1 class="heading"><span> welcome </span><br /> to <br /> apple<span>store</span></h1>

                        <Link to="login"> <button type="submit" class="btn" id="red">sign in</button></Link>
                        
                        <Link to="/signup"><button class="btn" id="red">Create new Account</button></Link>
                        <br />
                        <Link to="/home"><button class="btn">sign later</button></Link>
                    </form>
                </div>
            </div>



        </Fragment >);
}
export default Start;
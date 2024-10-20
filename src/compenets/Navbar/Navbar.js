import { Fragment } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { DataPro } from "../../pages/Products/data";
import "./Navbar.css";



function Nav() {

    const [Asm, setName] = useState("LapTop");

    if (Asm == 0) {
        setName("LapTop");
    }
    const [isChecked, setIsChecked] = useState(false);

    const toggleTheme = () => {
        if (isChecked) {
            changeToLight();
        } else {
            changeToDark();
        }
    };

    const changeToLight = () => {

        document.documentElement.style.setProperty("--black", "#2c2c54")
        document.documentElement.style.setProperty("--white1", "white")
        document.documentElement.style.setProperty("--white2", "rgb(242, 240, 240)")
        document.documentElement.style.setProperty("--green", "#27ae60")
        document.documentElement.style.setProperty("--col", "white")

    };

    const changeToDark = () => {

        document.documentElement.style.setProperty("--white1", "black")
        document.documentElement.style.setProperty("--white2", "#333")
        document.documentElement.style.setProperty("--black", "white")
        document.documentElement.style.setProperty("--col", "#27ae60")
        document.documentElement.style.setProperty("--green", "#1f7c46")

    };

    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };
    const [test, settest] = useState(0);
    function length() {
    }
    const [dataMap1, setValue] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setValue(dataMap1 => DataPro.filter((DataPro) => DataPro.inCart == "yes").length)
        }, 1);
        return () => clearInterval(intervalId);
    }, []);

    // Function to call when click the "enter" key to Search
    function Enter() {
        useEffect(() => {

            const input = document.getElementById("search-box");
            const button = document.getElementById("klik");
            input.addEventListener("keyup", function (event) {

                // Checking if key pressed is ENTER or not
                // if the key pressed is ENTER
                // click listener on button is called
                if (event.keyCode == 13) {
                    button.click();
                }

            })
            console.log(input)
        }, []);
    }





    return (
        <Fragment>

            {/* <!-- header section starts  --> */}

            <header>

                <input type="checkbox" name="" id="toggler" />

                {/* display only in Mobile view */}

                <label for="toggler" className={isActive ? "fas fa-bars" : "fas fa-times"} onClick={handleToggle}></label>

                <a href="#" class="logo" id="ahmed2">apple<span>store</span></a>




                <nav class="navbar">

                    <ul>
                        <li className="qq" id="ez"  /* display only in Mobile view */ >
                            <a className="fas fa-moon" id="ez" onClick={changeToDark} ></a>
                            <a className="fas fa-sun" id="ez" onClick={changeToLight} ></a>
                        </li>

                        <li><Link to="/home"><b>Home</b></Link></li>

                        <li className="qq" id="ez"><Link to="cont" id="ez"><b>contact us</b></Link></li>

                        <a>
                            <li className="qq" ><p>&ensp;<b><i id="del">.</i>products </b> <i class="fas fa-angle-down" /> </p>
                                <ul class="dropdown" aria-label="submenu">
                                    <li><Link to="/pro/Laptop" >All  </Link ></li>
                                    <li><Link to="/iphone">iPhone<i id="del">......</i><p class="fas fa-mobile-alt" /></Link></li>
                                    <li><Link to="/mac">Mac<i id="del">..........</i><p class="fas fa-laptop" /></Link></li>
                                    <li><Link to="/watchs">Watchs &ensp; <p class="fab fa-apple" /></Link></li>
                                </ul>
                            </li>
                        </ a>
                    </ul>
                </nav>


                <div class="search-box-container" id="hi1">
                    <div className="pop" >
                        <input type="search" id="search-box" placeholder="search by name .." onChange={(e) => setName(e.target.value)} />
                        <Link to={`/pro/${Asm}`}> <label for="search-box" class="fas fa-search" id="klik"></label></Link>
                    </div>
                </div>
                <a href="#" class="logo" id="hi2">apple<span>store </span> </a>



                <div class="icons" >
                    <a id="noic" href="#">
                        <ul id="alar">
                            <li className="fas fa-search" id="alser" >

                                <ul class="dropdown" id="aldrop" aria-label="submenu">

                                    <li id="offf">
                                        <span> search for a product</span>
                                        <br />
                                        <br />

                                        <div class="search-box-container" >
                                            <div className="pop" >
                                                <input type="text" id="search-box" placeholder="search by name .." onChange={(e) => setName(e.target.value)} />
                                                <Link to={`/pro/${Asm}`}> <label for="search-box" class="fas fa-search" id="klik"></label></Link>
                                            </div>
                                        </div></li>
                                </ul>
                            </li>
                        </ul>
                    </a>
                    <Link to="/cart" class="fas fa-shopping-cart"  >
                        <span className="badge">
                            <b >{dataMap1} </b>
                        </span>
                    </Link>


                    <Link to="/profile" class="fas fa-user"></Link>

                </div>
                {/* 
                <label className="switch">
                    <input
                        type="checkbox"
                        className="input__check"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        onClick={toggleTheme}
                    />
                    <span className="slider"></span>
                </label> */}
                <ul id="wow3">   {/* display when in LapTop view */}

                    <a>
                        <li className="fas fa-cog" id="wow3">
                            <ul class="dropdown" aria-label="submenu" id="zeze">
                                <li><a id="wow1">change mood</a></li>
                                <li id="wow4">
                                    <a className="fas fa-moon" id="wow2" onClick={changeToDark} />
                                    &ensp;
                                    <a className="fas fa-sun" id="wow2" onClick={changeToLight} />
                                </li>
                                <li><Link to="/cont" id="wow1">get help</Link></li>
                            </ul>
                        </li>
                    </ a>
                </ul>
            </header>

            <Enter />
        </Fragment >

    )

}
export default Nav;

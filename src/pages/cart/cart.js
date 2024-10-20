import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { DataPro } from "../Products/data";
import CardItem from "./cardItem";
import Category from "../../compenets/Category/cat";
import { useAlert } from "react-alert";

export default function Cart() {
    const alert = useAlert()

    const [test, settest] = useState(0);


    function GetTotal() {
        const handleDel = () => {

            for (let index = 0; index < Test.length; index++) {
                Test[index].inCart = "no"
            }
            alert.show("cart is empty")
        }
        let Test = DataPro.filter((DataPro) => DataPro.inCart == "yes");
        let Total = 0;
        for (let index = 0; index < Test.length; index++) {
            Total = Test[index].qi + Total;
            console.log("Hi", Total)
            settest(2)
        }

        if (test == 2)
            return (
                <>
                    <i><b>Total</b><span class="AIprice_color"> ${Total} </span><br />
                        with free shipping!
                        <br />
                        <Link to="/cheack"> <button className="btn" id="nohov" >Cheackout Now</button></Link>
                        <br />
                        <a href="#"><button className="btn" style={{ marginbottom: "10px" }} id="nohov" onClick={handleDel} >empty your cart </button></a> </i>
                </>
            )
        localStorage.setItem("Total", JSON.stringify(Total));

    }

    if ((DataPro) => DataPro.inCart == "yes") {
        var dataMap =
            DataPro.filter((DataPro) => DataPro.inCart == "yes").map((DataPro) => {
                return (<CardItem DataPro={DataPro} key={DataPro.id} />)
            })

    }
    const [id, setID] = useState(4);
    const [counter, setCounter] = useState(1);
    let incrementCounter = () => setCounter(counter + 1);

    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }
    if (counter >= 10) {
        incrementCounter = () => setCounter(10);
    }
    var Sum = 0;
    for (let index = 0; index < DataPro.filter((DataPro) => DataPro.inCart == "yes").length; index++) {
        Sum = DataPro.filter((DataPro) => DataPro.inCart == "yes")[index].price + Sum;

    }

    const Show = () => {
        if (dataMap.length == 0) {
            return (

                <>
                    <i class="product" >
                        <Category />
                    </i>
                    <div className="heading" id="border-top">
                        <Link to="/pro/Laptop"><button className="btn" style={{ marginbottom: "10px" }} >continue shopping</button></Link>
                    </div>
                </>
            )
        }
        else {
            return (
                <Fragment>
                    <div className="heading" id="border-top">
                        <GetTotal />
                        <br />
                        <Link to="/pro/Laptop"> <button className="btn" style={{ marginbottom: "10px" }} id="nohov" >continue shopping</button></Link><br />
                    </div>  </Fragment>
            )
        }

    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            settest(1);
        }, 500);
        return () => clearInterval(intervalId);
    }, []);

    return (<Fragment>
        <div class="AIcontainer">
            <div class="AIcart">
                <div class="AIcart_detail">
                    <h1 class="heading" id="AILOGO"  > you have <span>{dataMap.length}</span> Product in your Cart </h1>
                    {dataMap}
                </div>
                <Show />

            </div>
            <a href="#" class="fas fa-arrow-up" id="scroll-top"></a>
        </div>

    </Fragment >
    )
}
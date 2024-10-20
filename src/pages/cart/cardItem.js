import { Fragment } from "react";
import { useState } from "react";
import "./cart.css";
import { DataPro } from "../Products/data";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";

function Display(props) {
    return (
        <strong>{props.message}</strong>
    )
}

function ButtonIncrement(props) {

    return (
        <i class="btn" onClick={props.onClickFunc}
        > +
        </i>
    )
}
function ButtonDecrement(props) {

    return (
        <span class="btn" onClick={props.onClickFunc}
        >-
        </span>
    )
}


const CardItem = ({ DataPro }) => {
    const alert = useAlert()
    var ram = DataPro.title;


    const [Delete, setDelete] = useState(1);
    const [counter, setCounter] = useState(1);
    let incrementCounter = () => setCounter(counter + 1);

    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }
    if (counter >= 10) {
        incrementCounter = () => setCounter(10);
    }


    var sum = counter * DataPro.price;
    DataPro.qi = sum;

    if (Delete == 1) {
        return (<Fragment>
            <div class="AIcart_item">
                <div class="AIcart_image ">
                    <img class="AIcart_image" id="bord" src={DataPro.img} alt="" />
                </div>
                <div class="AIcart_item_detail">
                    <hr />
                    <div class="AIshoes_detail">
                        <p class="shoes_sub_head"><strong>Name </strong>
                            <b class="AIprice_color"> {DataPro.title}</b>
                        </p>
                        <br />
                        <p class="AIshoes_sub_head"><strong> ID </strong>
                            <span class="AIprice_color"><b> {DataPro.id}</b></span>
                        </p>
                        <div class="AIshoes_size_select">
                            <label > <strong>QTY </strong></label> <br />
                            <ButtonDecrement onClickFunc={decrementCounter} />
                            {""}&ensp;  <Display message={counter} />{""} &ensp;
                            <ButtonIncrement onClickFunc={incrementCounter} class="pqt-minus">-</ButtonIncrement>
                        </div>
                        <div class="AIprice">
                            <strong>
                                Price: <span class="AIprice_color">${DataPro.price}</span>
                                <br />
                                Total: <span class="AIprice_color">${sum}</span>
                            </strong>

                        </div>
                        <div class="AIcart_btn">
                            <a><p class="btn" onClick={() => setDelete(0)}>Remove</p></a> 
                        </div>

                    </div>
                </div>
            </div>


        </Fragment>)
    }
    else if (Delete == 0) {
         (DataPro.inCart = "no")
         alert.show(`${ram} removed from your cart!`);
        
        }

}
export default CardItem;

import React, { useId } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from "react";
import "./Home.css";



const ProductCard = ({ DataPro }) => {

    const [disabled, setDisabled] = useState(false);
    const [showAlert, setShowAlert] = useState(true);
    const handle = () => {
        DataPro.inCart = "yes";
        if (!disabled) {
            if (showAlert) {
                alert.show(`${DataPro.title} added to cart`)
                setShowAlert(false);

            }
            else {
                alert.show(`${DataPro.title} already in cart`);
            }
            setDisabled(true);
            setTimeout(() => {
                setDisabled(false);
            }, 4900);
        }

    }

    const [Asm, setName] = useState(0);

    const alert = useAlert()
    const URl = `https://online-apple-store.web.app//test/${DataPro.id}`
    return (

        <div class="box">
            <div class="icons">

                <Link to={`/test/${DataPro.id}`} class="fas fa-eye" id="opp"></Link>
                <CopyToClipboard text={URl}>
                    <a className="fas fa-share" color="white" id="opp" onClick={() => {
                        alert.show('Link Copied!')
                    }} >

                    </a>
                </CopyToClipboard>

            </div>
            <img src={DataPro.img} alt="" />
            <h3>{DataPro.title}</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <div class="price"> ${DataPro.price} </div>
            <div class="quantity"></div>
            <a class="btn" disabled={disabled} onClick={((e) => setName(DataPro.id)) && (handle)

            } id="no" ><b> add to cart </b> </a>
        </div>

    );


};
export default ProductCard;




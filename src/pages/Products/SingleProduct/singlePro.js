import { Fragment } from "react";
import { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useAlert } from "react-alert";
import "./singlePro.css";
import { useLocation } from "react-router-dom";
import { DataPro } from "../data";

import Rev from "./review";



const SinglePro = () => {

  const [disabled, setDisabled] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const location = useLocation();
  const Id = location.pathname.split("/")[2];

  const item =
    DataPro.filter((DataPro) => DataPro.id == Id)
    ;

  const num = parseInt(Id) + 1
  const handle = () => {

    item[0].inCart = "yes";

    if (!disabled) {
      if (showAlert) {
        alert.show(`${item[0].title} added to cart`)
        setShowAlert(false);

      }
      else {
        alert.show(`${item[0].title} already in cart`);
      }
      setDisabled(true);
      setTimeout(() => {
        setDisabled(false);
      }, 4900);
    }


  }

  console.log(item[0].title)
  const alert = useAlert();
  const URL = window.location.href
  return (
    <Fragment>
        <h1 class="heading" id="padadingtop" >{item[0].title }<span> details</span></h1>

      <div class="pro_detail">
        
        <div>

          <img class="pro_detail_image" src={item[0].img} alt="" />
        </div>
        <div class="pro_dic">
          <div class="pro_head">
            <h3 class="pro_heading">{item[0].title}</h3>

            <h1 class="contain">{item[0].price}$</h1>
          </div>


          <p class="btn" id="asas" disabled={disabled}
            onClick={handle

            }  >
            ADD TO CART
          </p>

          <br />


          <div class="description">
            <h3 class="desc_head">Description</h3>
            <p class="desc_data">
              {item[0].desc}</p>
            <CopyToClipboard text={URL}><button class="btn" id="ds" onClick={() => {
              alert.show('The URl copied in your Clipboard!')
            }} >
              share

            </button>
            </CopyToClipboard>
          </div>

        </div>
      </div>
      <Rev /> <a href="#" class="fas fa-arrow-up" id="scroll-top"></a>

    </Fragment>
  );
}
export default SinglePro;

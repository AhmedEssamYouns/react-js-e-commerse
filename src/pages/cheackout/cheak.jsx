import { Fragment } from "react";
import React from "react";

import "./style.css"


function Cheak() {
  let Ahmed = localStorage.getItem("Total");
  
    return (
        <Fragment>
            <div class="colm-form" id="ahaa" >
              
                <div class="form-container">
                <p><h3 style={{ color:"var(--black)" }}  >your total is <i style={{ color:"var(--green)" }} >${Ahmed}</i> </h3>
                 </p>
                    <p><h2>Pesonal information</h2></p>
                    <input type="text" placeholder="addres..." required />
                    <input type="number" placeholder="phone number..." required />
                    <button class="btn-new">cash on delevery</button>
                    <div style={{marginTop:"10px"}}>
                    <p><h2>Credit Card Info</h2></p>
                    <input type="text" placeholder="name on card..." required />
                    <input type="number" placeholder="card number : 000-000-000" required />
                    <input type="password" placeholder="cvv number : xXXX" required />
                    <button class="btn-new">pay by visa</button>
                    </div>
<span> </span><div></div>


                </div>
            </div>
            <section class="icons-container">
        <div class="icons">
          <img src={require("./images/icon-1.png")} alt="" />
          <div class="info">
            <h3>fast delivery</h3>
            <span>on all orders</span>
          </div>
        </div>
        <div class="icons">
          <img src={require("./images/icon-2.png")} alt="" />
          <div class="info">
            <h3>10 days returns</h3>
            <span>moneyback guarantee</span>
          </div>
        </div>
        <div class="icons">
          <img src={require("./images/icon-3.png")} alt="" />
          <div class="info">
            <h3>offer & gifts</h3>
            <span>on all orders</span>
          </div>
        </div>
        <div class="icons">
        <img src={require("./images/icon-4.png")} alt="" />

          <div class="info">
            <h3>secure paymens</h3>
            <span>protected</span>
          </div>
        </div>
      </section>
      <a href="#" class="fas fa-arrow-up" id="scroll-top"></a>

        </Fragment >);
}
export default Cheak;
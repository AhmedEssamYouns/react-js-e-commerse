import { Fragment } from "react";
import React from "react";
import { useState } from "react";
import { DataPro } from "../pages/Products/data";

import { useRef } from "react";




function Add() {
    const form = useRef()

    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
    };


    const [img, setImg] = useState("");
    const [Name, setName] = useState("null");
    const [price, setPrice] = useState("");
    const [Category, setCat] = useState("null");
    const [FEATURED, setFet] = useState("null");
    const [desc, setDesc] = useState("");

    let Product = {
        id: (DataPro.length + 1),
        img: img,
        title: Name,
        price: price,
        Category: Category,
        fetch: FEATURED,
        desc: desc
        , inCart: "no",
    }


    const handle = (e) => {
        e.preventDefault();
        DataPro.push(Product)
        e.target.reset()


    }
    return (
        <Fragment>

            <div class="colm-form">

                <div class="form-container">

                    <form ref={form} onSubmit={handle}>
                        <input type="file" id="file" onChange={onImageChange} style={{paddingTop:"10px"}} placeholder="Peoduct image" required />
                        <input type="text" id="phha" placeholder="Product Name" onChange={(e) => setName(e.target.value)} required />
                        <input type="text" id="phha" placeholder="Product Name" onChange={(e) => setPrice(e.target.value)} required />
                        <input type="text" id="phha" placeholder="Category : iphone / mac / watchs" onChange={(e) => setCat(e.target.value)} required />
                        <input type="text" id="phha" placeholder="Descrption" onChange={(e) => setDesc(e.target.value)} required />
                        <input type="text" id="phha" placeholder="FEATURED : yes / no" onChange={(e) => setFet(e.target.value)} required />
                        <button type="submit" class="btn" onClick={handle} > Add</button>

                    </form>
                </div>
            </div>





        </Fragment >);
}
export default Add;
import { Fragment } from "react";
import React from "react";
import ProductCard from "../Products/ProductCard";
import { DataPro } from "../Products/data";
import Category from "../../compenets/Category/cat";


const SearchMap = ({ name }) => {

    if (name == 1000) { name = "null" }


    const dataMap =
        DataPro.filter((DataPro) => DataPro.title.toLowerCase().includes(name.toLowerCase())).map((DataPro) => {
            return (<ProductCard DataPro={DataPro} key={DataPro.id} />)
        });

    function Error() {
        if (dataMap.length == 0) {
            return (
                <h1 class="heading" style={{ marginTop: "10px" }}>search for <span>somthing else</span> or try <Category /></h1>
            )
        }
    }

    console.log(name)
    return (
        <Fragment>

            <section class="product" id="product">
                <h1 class="heading" style={{ marginTop: "10px" }}>founded <span>{dataMap.length}</span> products by <br />
                    "<span style={{ textTransform: "none" }}>{name}</span>"
                </h1>

                <div class="box-container">

                    {dataMap}

                </div>

                <Error />
            </section>
            <a href="#" class="fas fa-arrow-up" id="scroll-top"></a>

        </Fragment >);
}
export default SearchMap;

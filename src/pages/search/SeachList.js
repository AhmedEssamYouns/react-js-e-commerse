import { Fragment } from "react";
import React from "react";
import { useLocation } from "react-router-dom";
import SearchMap from "./SearchMap";

function SearchList() {

    const location = useLocation();
    const name = location.pathname.split("/")[2];
    const search = name.replace('%20', " ")
   console.log(name)

    return (
        <Fragment>
            <SearchMap name={search} />
        </Fragment>
    )
}
export default SearchList;
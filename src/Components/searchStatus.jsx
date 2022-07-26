import React from "react";
import "bootstrap/dist/css/bootstrap.css"

const SearchStatus = ({length, onChange}) => {

    return (
          <h2> <span className={"badge bg-"+(length > 0 ? "primary" : "danger")}> {length > 0 ? `${length} ${onChange} с тобой сегодня` : `Никто с тобой не тусанет`}</span></h2>
    )
 }


export default SearchStatus;

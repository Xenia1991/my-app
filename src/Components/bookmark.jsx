import React, {useState} from "react";
import API from "../api";

const Bookmark = ({bookmark, ...rest}) => {
    const bookmarkIcon = "bi bi-star" + (bookmark? "-fill" : "");

    return (
    <button {...rest}><i className={bookmarkIcon}></i></button>
    )
};

export default Bookmark;
import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ bookmark, ...rest }) => {
    const bookmarkIcon = "bi bi-star" + (bookmark ? "-fill" : "");

    return (
        <button {...rest}>
            <i className={bookmarkIcon}></i>
        </button>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.bool.isRequired
};

export default Bookmark;

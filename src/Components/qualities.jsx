import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Qualities = ({ qualities }) => {
    const userQuality = qualities.map((quality) => {
        return (
            <span className={`badge bg-${quality.color} m-1`} key={quality._id}>
                {" "}
                {quality.name}
            </span>
        );
    });
    return userQuality;
};

export default Qualities;

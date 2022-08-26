import React from "react";
import PropTypes from "prop-types";

const QualitiesList = ({ qualities }) => {
    const userQuality = qualities.map((quality) => {
        return (
            <span className={`badge bg-${quality.color} m-1`} key={quality._id}>
                {quality.name}
            </span>
        );
    });
    return userQuality;
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;

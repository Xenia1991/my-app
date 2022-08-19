import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Qualities from "./qualities";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    bookmark,
    onBookmark
}) => {
    console.log(_id);
    console.log(onBookmark);
    return (
        <>
            <tr className="table-light" key={_id}>
                <td> {name} </td>
                <td>
                    <Qualities qualities={qualities} />
                </td>
                <td> {profession.name} </td>
                <td> {completedMeetings} </td>
                <td> {`${rate} /5`} </td>
                <td>
                    <Bookmark
                        bookmark={bookmark}
                        onClick={() => onBookmark(_id)}
                    />
                </td>
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => onDelete(_id)}
                    >
                        delete
                    </button>
                </td>
            </tr>
        </>
    );
};

User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.arrayOf(PropTypes.object).isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onBookmark: PropTypes.func.isRequired
};

export default User;

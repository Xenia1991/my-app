import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Qualities from "./qualities";
import Bookmark from "./bookmark";

const User = ({qualities, name, _id, profession, completedMeetings, rate, onDelete}) => {
    return (
        <>
            <tr className="table-light" key={_id}>
                 <td> {name} </td>
                 <td>
                  < Qualities qualities={qualities}/>
                </td>
                <td> {profession.name} </td>
                <td> {completedMeetings} </td>
                <td> {`${rate} /5`} </td>
                <td> <Bookmark /></td>
                <td> <button className="btn btn-danger" onClick={() => onDelete(_id)}> delete </button></td>
            </tr>
        </>
    )
};

export default User;

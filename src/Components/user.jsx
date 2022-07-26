import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Qualities from "./qualities";
// import Bookmark from "./bookmark";

const User = ({_id, name, qualities, profession, completedMeetings, rate, onClick}) => {
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
                {/* <td> <Bookmark bookmark={bookmark} _id={_id} onBookmark={() => onClick(_id)}/></td> */}
                <td> <button className="btn btn-danger" onDelete={() => onClick(_id)}> delete </button></td>
            </tr>
        </>
    )
};

export default User;

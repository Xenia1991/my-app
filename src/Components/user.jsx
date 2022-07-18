import React, {useState} from "react";
import API from "../api";
import "bootstrap/dist/css/bootstrap.css";

const User = (props) => {
    return (
        <>
            <tr className="table-light" key={props._id}>
                <td> {props.name} </td>
                <td> {props.qualities.map((quality) => {return <span className={`badge bg-${quality.color} m-1`} key={quality._id}>{` ${quality.name} `}</span>})} </td>
                <td> {props.profession.name} </td>
                <td> {props.completedMeetings} </td>
                 <td> {`${props.rate} /5`} </td>
                <td> <button className="btn btn-danger" onClick={() => props.onDelete(props._id)}> delete </button></td>
            </tr>
        </>
    )
};

export default User;
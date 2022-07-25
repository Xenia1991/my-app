import React, {useState} from "react";
import User from "./user";
import API from "../api";
import SearchStatus from "./searchStatus";

const Users =() => {
    const allUsers=API.users.fetchAll();
    console.log(allUsers);
    const [users, setUser] = useState(allUsers);

    const handleUserChange = (id) => {
        setUser((prevState) => prevState.filter((user) => user._id !== id));
    };

    return (
        <>
        <SearchStatus 
        length = {users.length}
        />
        <table className="table table-light" hidden = {users.length===0 ? "hidden" : ""}>
            <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col">Избранное</th>
                    <th scope="col">  </th>
                </tr>  
            </thead>
            
            <tbody>
                {users.map((user)=> (
                    <User 
                    key = {user._id}
                    onDelete = {handleUserChange}
                    {...user}
                    />
                ))}
            </tbody>
        </table>
        </>
    ) 
};

export default Users;

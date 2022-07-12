import React, {useState} from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";

const Users =() => {
    const allUsers=api.users.fetchAll();
    const [users, setUser] = useState(allUsers);
    let userNumber = users.length;

    const getLabel = () => {
       return (
           userNumber===1 ? <h1> <span className="badge bg-primary">{userNumber} человек тусанет с тобой сегодня </span></h1> 
           : userNumber===0 ? <h1> <span className="badge bg-danger">никто с тобой не тусанет </span></h1> 
           : userNumber<=4 ? <h1> <span className="badge bg-primary">{userNumber} человека тусанет с тобой сегодня </span></h1> 
           : <h1> <span className="badge bg-primary">{userNumber} человек тусанут с тобой сегодня </span></h1>
       )
    }
    
    const getBadgeClasses = (quality) => {
        let classes = `badge m-1 `;
        classes += quality === "Нудила" ? "bg-primary " : quality === "Странный" ? "bg-secondary " : quality === "Красавчик" ? "bg-info " :  quality === "Неуверенный" ? "bg-dark " : quality === "Троль" ? "bg-success " : "bg-danger "
        return classes;
    }
    
    const handleUserChange = (id) => {
        setUser((prevState) => prevState.filter((user) => user._id !== id));
    }

    return (
        <>
        {getLabel()}

        <table className="table table-light" hidden = {users.length===0 ? "hidden" : ""}>
            <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col">  </th>
                </tr>  
            </thead>
        
            <tbody>
                {users.map((user)=> <tr className="table-light" key={user._id}>
                    <td> {user.name} </td>
                    <td> {user.qualities.map((quality) => {return <span className={getBadgeClasses(quality.name)}>{` ${quality.name} `}</span>})} </td>
                    <td> {user.profession.name} </td>
                    <td> {user.completedMeetings} </td>
                    <td> {`${user.rate} /5`} </td>
                    <td> <button className="btn btn-danger" onClick={() => handleUserChange(user._id)}> delete </button></td>
                </tr>)}
            </tbody>
        </table>
        </>
    ) 
};

export default Users;
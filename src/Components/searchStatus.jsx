import React from "react";
import API from "../api";
import "bootstrap/dist/css/bootstrap.css"

const SearchStatus = () => {
     const allUsers=API.users.fetchAll();
     let userNumber = allUsers.length;
     const lastNumber=userNumber%10;
     const lastNUmberForhundreds = userNumber%100;
    
    return (
         userNumber===0 ? <h1> <span className="badge bg-danger">никто с тобой не тусанет </span></h1> 
         : userNumber===1 ? <h1> <span className="badge bg-primary">{userNumber} человек тусанет с тобой сегодня </span></h1> 
         : (userNumber<=14 && userNumber>=12) ? <h1> <span className="badge bg-primary">{userNumber} человек тусанет с тобой сегодня </span></h1> 
         : (userNumber<=4 && userNumber>=2) ? <h1> <span className="badge bg-primary">{userNumber} человека тусанет с тобой сегодня </span></h1> 
         : (lastNUmberForhundreds<=14 && lastNUmberForhundreds>=12) ? <h1><span className="badge bg-primary">{userNumber} человек тусанет с тобой сегодня </span></h1> 
         : (lastNumber<=4 && lastNumber>=2) ? <h1><span className="badge bg-primary">{userNumber} человека тусанет с тобой сегодня </span></h1> 
         : (lastNumber===1) ? <h1><span className="badge bg-primary">{userNumber} человек тусанет с тобой сегодня </span></h1> 
         :  <h1> <span className="badge bg-primary">{userNumber} человек тусанут с тобой сегодня </span></h1>
    )
 }


export default SearchStatus;

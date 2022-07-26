import React, { useState } from "react";
import Users from "./Components/users"
import API from "../src/api"
import SearchStatus from "./Components/searchStatus";

const App = ({onDelete, _id}) => {
  const allUsers = API.users.fetchAll();
  // let bookmarkIcon = "bi bi-star";
  console.log(allUsers);
  const [users, setUser] = useState(allUsers);

  const handleUserChange = (id) => {
    setUser((prevState) => prevState.filter((user) => user._id !== id));
  };

  const renderPhrase = (number) => {
    const lastNumber = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) {
      return "человек тусанет";
    }
    if ([2, 3, 4].indexOf(lastNumber) > 0) {
      return "человека тусанут";
    }
    if (lastNumber === 1) {
      return "человек тусанет";
    }
    return "человека тусанет";
  };

  // const handleBookmark = (id) => {
  //   setUser((prevState) =>
  //     prevState.map((user) => {
  //       if (user._id !== id) {
  //         return bookmarkIcon;
  //       } else if (user._id === id) {
  //         bookmarkIcon = "bi bi-star-fill";
  //         return bookmarkIcon;
  //       }
  //     })
  //   );
  //   return bookmarkIcon;
  // };

  return ( <>
    <SearchStatus length = {users.length} onChange={() => {renderPhrase()}}/>
    <Users onDelete = {()=> handleUserChange(_id)} {...users} />
    </>
    
  )
};

export default App;

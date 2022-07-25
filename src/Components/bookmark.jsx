import React, {useState} from "react";
import API from "../api";

const Bookmark = ({_id, bookmark}) => {
    let bookmarkIcon = "bi bi-star";
    const allUsers=API.users.fetchAll();

    const [users, setUser] = useState(allUsers);

    const handleBookmark = (id) => {
      
      setUser((prevState) => prevState.map((user) => {
          if (user._id !== id) {
              return bookmarkIcon
          } else if (user._id === id) {
              bookmarkIcon = "bi bi-star-fill"
              return bookmarkIcon
          }
      }));
      return bookmarkIcon
    }

    // console.log (bookmarkIcon)
    return (
    <button onClick={() => handleBookmark(_id)}><i className={bookmarkIcon}></i></button>
    )
};

export default Bookmark;
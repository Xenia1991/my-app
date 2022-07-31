import React, { useState } from "react";
import Users from "./Components/users";
import API from "../src/api";
import SearchStatus from "./Components/searchStatus";

const App = () => {
    const allUsers = API.users.fetchAll();
    const [users, setUsers] = useState(allUsers);

    const handleUserChange = (id) => {
        setUsers((prevState) => prevState.filter((user) => user._id !== id));
    };

    const handleBookmark = (id) => {
        console.log(id);
        setUsers((prevState) =>
            prevState.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };

    return (
        <>
            <SearchStatus length={users.length} />
            {users.length > 0 && (
                <Users
                    onDelete={handleUserChange}
                    onBookmark={handleBookmark}
                    users={users}
                />
            )}
        </>
    );
};

export default App;

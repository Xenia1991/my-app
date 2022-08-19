import React, { useState, useEffect } from "react";
import Users from "./Components/users";
import API from "../src/api";

console.log("app");

const App = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        console.log("send request");
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleUserChange = (id) => {
        setUsers((prevState) => prevState.filter((user) => {
            console.log(user._id);
            return user._id !== id;
        }));
    };

    const handleBookmark = (id) => {
        setUsers((prevState) =>
            prevState.map((user) => {
                if (user._id === user.id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };

    return (
        <>
            {users && (
                <Users
                    users={users}
                    onDelete={handleUserChange}
                    onBookmark={handleBookmark}
                />
            )}
        </>
    );
};

export default App;

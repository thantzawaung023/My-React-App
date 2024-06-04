import React, { useState, useEffect } from 'react';
import "../Users.css";


const Users = (prop) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const url = "https://api.github.com/users"
    async function getUsers() {
        const response = await fetch(url);
        const users = await response.json();
        console.log(users);
        if (response.status > 300) {
            setIsError(true);
            setIsLoading(false);
        }
        setUsers(users);
        setIsLoading(false);
    }

    useEffect(() => {
        getUsers();
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    else if (isError) {
        return <h1>Error is Found...</h1>
    }

    return (
        <div>
            <h1>Github Users</h1>
            <div className='card-container' >
                {
                    users.map(user => {
                        return (

                            <div className='card' key={user.id}>
                                <img src={user.avatar_url} className='avatar' />
                                <div>
                                    <h2 className='user-name'>{user.login}</h2>
                                    <a href={user.html_url} className='git-profile'>Profile</a>
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        </div>

    );


}

export default Users;
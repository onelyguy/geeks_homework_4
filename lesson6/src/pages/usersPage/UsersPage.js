import React from 'react'

const UsersPage = ({users}) => {

    const getUsers = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    return (
        <ul>
            {
                users.map(user => 
                <li key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <button onClick={() => getUsers(user.id)}>Подробнее</button>
                    <p>================================</p>
                </li>    
                )
            }
        </ul>
    )
}

export default UsersPage
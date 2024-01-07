import React from 'react';


const UsersPage = ( {users} ) => {

  const getUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response=> response.json())
    .then(data=> console.log(data))
  }



  return (
    <ul>
      {
        users?.map(user=>
        <li key={user.id}>
          <p>Name: {user.name}</p>
          <p>email: {user.email}</p>
          <p>phone: {user.phone}</p>
          <button onClick={()=> getUser(user.id)}>подробнее</button>
          <p>===================================================</p>
        </li>
        )
      }
    </ul>
  );
};

export default UsersPage;
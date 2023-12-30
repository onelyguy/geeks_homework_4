import { useState } from 'react';
import './App.css';
import UsersPage from './pages/usersPage/UsersPage';
import FormPage from './pages/formPage/FormPage';

function App() {

  const [users, setUsers] = useState([])

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }

  console.log(users);

  return (
    <div className="App">
      <h1>lesson6</h1>
      <button onClick={getUsers}>getUsers</button>
      <UsersPage users={users}/>
      <FormPage/>
    </div>
  );
}

export default App;

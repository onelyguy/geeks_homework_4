import { useEffect, useState } from 'react';
import './App.css';
import UsersPage from './pages/usersPage/UsersPage';
import FormPage from './pages/formPage/FormPage';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/menu/Menu';
import MainPage from './pages/mainPage/MainPage'
import PokemonInfo from './pages/PokemonInfo/PokemonInfo';

function App() {

  const [users, setUsers] = useState([])
  
  const getUsersAxios = async () => {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      return data
    } catch (e) {
      console.log('Error', e.message)
    }
  }

  const getPokemon = async () => {
    try {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/')
      return data.results
    } catch(e) {
      console.log('Error', e.message)
    }
  }

  console.log('===============================', users);

  useEffect(() => {
    getUsersAxios().then((users) => setUsers(users))
  }, [])

  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<UsersPage users={users}/>}/> 
        <Route path='/mainPage' element={<MainPage/>}/>
        <Route path='/mainPage/:name' element={<PokemonInfo/>}/>
        <Route path='/form' element={<FormPage/>}/> 
      </Routes>  
    </BrowserRouter>
  );
}

export default App;

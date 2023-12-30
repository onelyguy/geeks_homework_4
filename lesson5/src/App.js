import './App.css';
import List from './components/List/List';
import Modal from './components/Modal/Modal';
import {useEffect, useState} from "react"
import Pagination from './components/Pagination/Pagination';

function App() {
  let isShown = false
  const [show, setShow] = useState(false)
  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState([])

  const handleOpen = () => {
    setShow(!show)
  }

  const handleTextInput = (event) => {
    setNewTask(event.target.value)
  }

  const handleAdd = () => {
    setTasks((prevState) => [...prevState, {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      title: newTask,
      completed: false
    }])
  }

  const handleDelete = (id) => {
    const deleted = tasks.filter(task => task.id !== id)
    setTasks([...deleted])
  }

  const handleEdit = (editTodo) => {
    tasks.map(task => {
      if (task.id === editTodo.id) {
        return task.title = editTodo.title
      }
    })
    setTasks(tasks)
  }

  const handleDone = (id) => {
    tasks.map(task => {
      if (task.id === id) {
        return task.completed = !task.completed
      }
      return tasks 
    })
    setTasks([...tasks])
  }

  const BASE_URL = 'https://jsonplaceholder.typicode.com/'

  const getTodos = async (endpoint) => {
    const data = await fetch(BASE_URL + endpoint)
    const todos = await (data.json())
    setTasks(todos)
    console.log(todos);
    return todos 
  }

  const limit = 10
  const [offset, setOffset] = useState(0)
  const page = Math.floor(offset/limit) + 1

  const handlePrev = () => {
    setOffset(prev => prev - limit)
  }

  const handleNext = () => {
    setOffset(prev => prev + limit)
  }

  useEffect(() => {
    getTodos(`todos?_limit=${limit}&_start=${offset}`)
  }, [offset])

  // useEffect(() => {
  //   const myLocalList = JSON.parse(localStorage.getItem('tasks'))
  //   if (myLocalList === null) {
  //     return localStorage.setItem('tasks', JSON.stringify(tasks))
  //   }
  //   if (myLocalList.length !== 0) {
  //     setTasks(myLocalList)
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('tasks', JSON.stringify(tasks))
  // }, [tasks])

  return (
    <div className="App">
      <button className='btn' onClick={handleOpen}>Открыть</button>
      {show && 
        <Modal 
          handleOpen = {handleOpen}
          handleTextInput = {handleTextInput}
          handleAdd = {handleAdd}
        />
      }
      <List 
        tasks = {tasks} 
        handleDelete = {handleDelete}
        handleEdit = {handleEdit}
        handleDone = {handleDone}
      />
      <Pagination page={page} handlePrev={handlePrev} handleNext={handleNext}/>
    </div>
  );
}

export default App;

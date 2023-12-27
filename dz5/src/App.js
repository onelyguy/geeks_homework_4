import './App.css';
import List from './components/List/List';
import Modal from './components/Modal/Modal';
import {useEffect, useState} from "react"

function App() {
  let isShown = false
  const [show, setShow] = useState(false)
  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [filterOption, setFilterOption] = useState("all");

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

  useEffect(() => {
    const myLocalList = JSON.parse(localStorage.getItem('tasks'))
    if (myLocalList === null) {
      return localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    if (myLocalList.length !== 0) {
      setTasks(myLocalList)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const deleteAll = () => {
    setTasks([])
  }

  const handleSelect = (event) => {
    setFilterOption(event.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filterOption === "completed") {
      return task.completed;
    } else if (filterOption === "notCompleted") {
      return !task.completed;
    } else {
      return true;
    }
  });

  return (
    <div className="App">
      <select value={filterOption} onChange={handleSelect}>
        <option value="all">Все таски</option>
        <option value="completed">Выполненные</option>
        <option value="notCompleted">Не Выполненные</option>
      </select>
      <button className='btn' onClick={handleOpen}>Открыть</button>
      {show && 
        <Modal 
          handleOpen = {handleOpen}
          handleTextInput = {handleTextInput}
          handleAdd = {handleAdd}
          handleEdit = {handleEdit}
        />
      }
      <List 
        tasks = {filteredTasks} 
        handleDelete = {handleDelete}
        handleEdit = {handleEdit}
        handleDone = {handleDone}
      />
      <button className='btn' onClick={deleteAll}>Очистить все</button>
    </div>
  );
}

export default App;

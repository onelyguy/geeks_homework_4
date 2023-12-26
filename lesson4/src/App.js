import './App.css';
import List from './components/List/List';
import Modal from './components/Modal/Modal';
import {useState} from "react"

function App() {
  let isShown = false
  const [show, setShow] = useState(false)
  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "HTML",
      completed: false
    },
    {
      id: 2,
      title: "CSS",
      completed: false
    },
    {
      id: 3,
      title: "JS",
      completed: false
    },
    {
      id: 4,
      title: "REACT",
      completed: false
    }
  ])
  const handleOpen = () => {
    setShow(!show)
  }

  const handleTextInput = (event) => {
    setNewTask(event.target.value)
  }

  const handleAdd = () => {
    setTasks((prevState) => [...prevState, {
      id: tasks[tasks.length - 1].id + 1,
      title: newTask,
      completed: false
    }])
  }

  const handleDelete = (id) => {
    const deleted = tasks.filter(task => task.id !== id)
    setTasks([...deleted])
  }

  const handleEdit = () => {

  }

  const handleDone = (id) => {
    tasks.map(task => {
      if (task.id===id) {
        return task.completed = !task.completed
      }
      return tasks 
    })
    setTasks([...tasks])
  }

  return (
    <div className="App">
      <button className='btn' onClick={handleOpen}>Открыть</button>
      {show && 
        <Modal 
          handleOpen={handleOpen}
          handleTextInput={handleTextInput}
          handleAdd={handleAdd}
          handleEdit={handleEdit}
        />
      }
      <List 
        tasks={tasks} 
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleDone={handleDone}
      />
    </div>
  );
}

export default App;

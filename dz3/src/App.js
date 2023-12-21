import './App.css';
import List from './components/List/List';
import Modal from './components/Modal/Modal';
import input from "./components/Input/Input";
import {useState} from "react"

function App() {
  let isShown = false
  const [show, setShow] = useState(false)
  const [newTask, setNewTask] = useState("")
  const [query, setQuery] = useState('')
  const [state, setState] = useState({
    query: '',
    list: []
  })
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
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const handleChange = (e) => {
    const results = tasks.filter((task) => {
      if (e.target.value === "") return tasks
      return task.title.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setState({
      query: e.target.value,
      list: results
    })
  }

  return (
    <div className="App">
      <input
        type="search"
        value={state.query}
        onChange={handleChange}
      />
      <button onClick={handleOpen}>Открыть</button>
      {show && 
        <Modal 
          handleOpen={handleOpen}
          handleTextInput={handleTextInput}
          handleAdd={handleAdd}
        />
      }
      {state.query ? (
        state.list.length > 0 ? (
          <List tasks={state.list} handleDelete={handleDelete} />
        ) : (
          <p>Соответствующих результатов не найдено.</p>
        )
      ) : (
        <List tasks={tasks} handleDelete={handleDelete} />
      )}
    </div>
  );
}

export default App;

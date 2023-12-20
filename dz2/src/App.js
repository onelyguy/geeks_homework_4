import './App.css';
import List from './components/List/List';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import {useState} from "react"

function App() {
  let isShown = false
  const [show, setShow] = useState(false)
  const handleOpen = () => {
    setShow(!show)
  }

  const [searchInput, setSearchInput] = useState('');
  const [addInput, setAddInput] = useState('');

  const tasks = [
    {
      id:1, 
      task: 'coding'
    },
    {
      id:2,
      task: 'eat'
    },
    {
      id:3,
      task: 'sleep'
    }
  ]

  return (
    <div>
      <button onClick={handleOpen}>Открыть</button>
      {show && <Modal handleOpen={handleOpen}>
        </Modal>
      }
      <List tasks={tasks}/>
      <Button props="Add task"/>
    </div>
  );
}

export default App;

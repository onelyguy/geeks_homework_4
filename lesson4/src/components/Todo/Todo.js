import React, { useState } from "react";
import classes from "./todo.module.css"

const Todo = ({task, handleDelete, handleEdit, handleDone, handleSelectCurrent, isEdit}) => {
    const [input, setInput] = useState(task.title)
    if (isEdit) {
        return <div>
            <input 
                type="text"
                value={input}
                onChange={event =>
                    setInput(event.target.value) 
                }
            />
            <button>Сохранить</button>
            <button>Отмена</button>
        </div>
    }
    return (
        <div className={classes.todo}>
            <h5>{task.id} {task.title}</h5>
            <button onClick={() => {handleSelectCurrent(task.id)}}>Редактировать</button>
            <button onClick={() => {handleDone(task.id)}}>Done</button>
            <button onClick={() => {handleDelete(task.id)}}>Удалить</button>
        </div>
    )
}

export default Todo;
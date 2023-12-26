import React, { useState } from "react";
import classes from "./todo.module.css"

const Todo = ({task, handleDelete, handleEdit, handleDone, handleSelectCurrent, isEdit}) => {
    const [newTitle, setNewTitle] = useState(task.title)
    if (isEdit) {
        return <div>
            <input 
                type="text"
                value={newTitle}
                onChange={event =>
                    setNewTitle(event.target.value) 
                }
            />
            <button onClick={() => {
                handleEdit({
                    ...task, title: newTitle
                })
                handleSelectCurrent(null)
            }}>Сохранить</button>
            <button onClick={() => {handleSelectCurrent(null)}}>Отмена</button>
        </div>
    }
    return (
        <div className={`${classes.todo} ${task.completed && classes.isTrue}`}>
            <h5>{task.id} {task.title}</h5>
            <button onClick={() => {handleSelectCurrent(task.id)}}>Редактировать</button>
            <button onClick={() => {handleDone(task.id)}}>Done</button>
            <button onClick={() => {handleDelete(task.id)}}>Удалить</button>
        </div>
    )
}

export default Todo;
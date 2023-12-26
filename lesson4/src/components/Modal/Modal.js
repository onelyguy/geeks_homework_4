import React, {useState} from "react";
import classes from "./modal.module.css";
import input from "../Input/Input";

const Modal = ({handleOpen, handleTextInput, handleAdd}) => {
    const [inputValue, setInputValue] = useState('')

    return (
        <>
            <div className={classes.modalWrapper} onClick={handleOpen}></div>
            <div className={classes.modalContent}>
                <button onClick={handleOpen} className={classes.btn}>Закрыть</button>
                <input 
                    name={"add"}
                    onChange={handleTextInput}
                />
                <button onClick={handleAdd} className={classes.btn}>Добавить</button>
            </div>    
        </>
    )
}

export default Modal
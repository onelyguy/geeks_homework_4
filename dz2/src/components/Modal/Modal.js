import React, {useState} from "react";
import classes from "./modal.module.css";
import Input from "../Input/Input";

const Modal = ({children, handleOpen}) => {
    const [inputValue, setInputValue] = useState('')

    return (
        <>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                {children}
                <h1>{inputValue}</h1>
                <input
                    type="text"
                    placeholder="Введите текст"
                    onChange={(event) => setInputValue(event.target.value)}    
                />
                <button onClick={handleOpen} className={classes.btn}>Закрыть</button>
            </div>    
        </>
    )
}

export default Modal
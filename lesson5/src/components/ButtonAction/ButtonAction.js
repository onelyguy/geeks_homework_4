import React from "react";
import classes from "./buttonAction.module.css"

function ButtonAction({handleClick, type, task, children}) {
    return (
        <button 
            className={classes[type]}
            onClick={() => handleClick(task.id)}
        >
            {children}
        </button>
    )
}

export default ButtonAction
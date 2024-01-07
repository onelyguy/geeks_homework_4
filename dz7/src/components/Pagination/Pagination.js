import React from "react";
import classes from './pagination.module.css';

const Pagination = ({handlePrev, page, handleNext}) => {
    return (
        <div className={classes.pagination}>
            <button onClick={handlePrev}>Prev</button>
            <p>{page}</p>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default Pagination
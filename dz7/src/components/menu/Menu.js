import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./menu.module.css"

const Menu = () => {
    return (
        <ul>
            <li>
                <NavLink 
                    to="/"
                    className={({isActive}) => isActive ? `${classes.active}` : ''}
                >Главная</NavLink>
            </li>
            <li>
                <NavLink 
                    to="/mainPage"
                    className={({isActive}) => isActive ? `${classes.active}` : ''}
                >Main Page</NavLink>
            </li>
            <li>
                <NavLink 
                    to="/form"
                    className={({isActive}) => isActive ? `${classes.active}` : ''}
                >Форм</NavLink>
            </li>
        </ul>
    )
}

export default Menu;
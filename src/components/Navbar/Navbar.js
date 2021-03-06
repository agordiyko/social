import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className = {classes.nav}>
            <ul>
                <li className={classes.item}>
                    <NavLink to="/profile" activeClassName={classes.active} className={classes.link}>Profile</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/dialogs" activeClassName={classes.active} className={classes.link}>Messages</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/news" activeClassName={classes.active} className={classes.link}>News</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/music" activeClassName={classes.active} className={classes.link}>Music</NavLink>
                </li>
                <li className={`${classes.item} ${classes.settings}`}>
                    <NavLink to="/settings" activeClassName={classes.active} className={`${classes.link} ${classes.settings}`}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
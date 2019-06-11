import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.menu}>
            <ul>
                <li>
                    <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs" activeClassName={classes.activeLink}>Dialogs</NavLink>
                </li>
                <li>
                    <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName={classes.activeLink}>About</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
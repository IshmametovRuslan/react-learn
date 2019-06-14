import {NavLink} from "react-router-dom";
import classes from "../Navigation.module.css";
import React from "react";

const NavItem = (props) => {
    let path = props.link;
    let name = props.name;

    return (
        <li>
            <NavLink to={path} activeClassName={classes.activeLink}>{name}</NavLink>
        </li>
    )
};

export default NavItem;
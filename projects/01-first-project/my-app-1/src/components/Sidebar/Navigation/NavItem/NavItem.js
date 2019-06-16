import {NavLink} from "react-router-dom";
import classes from "../Navigation.module.css";
import React from "react";

const NavItem = (props) => {
    let path = props.link;
    let name = props.name;
    let navLink_id = props.navLink_id;

    return (
        <li>
            <NavLink to={path} activeClassName={classes.activeLink} data-navLink_id={navLink_id}>{name}</NavLink>
        </li>
    )
};

export default NavItem;
import classes from "./Navigation.module.css";
import React from "react";
import NavItem from "./NavItem/NavItem";

const Navigation = (props) => {

    let navData = [
        props.navData.map( navItem => <NavItem link={navItem.link} name={navItem.itemName}/>)
    ];

    return (
        <nav className={classes.menu}>
            <ul>
                {navData}
            </ul>
        </nav>
    );
};

export default Navigation;
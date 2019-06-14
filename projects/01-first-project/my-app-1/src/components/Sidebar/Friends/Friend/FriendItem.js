import React from 'react'
import classes from './FriendItem.module.css'

const FriendItem = (props) => {
    return (
        <li className={classes.friendItem}>
            <a href="#">
                <img src={props.img}
                    alt=""/>
                <p>{props.name}</p>
            </a>
        </li>
    )
};

export default FriendItem;
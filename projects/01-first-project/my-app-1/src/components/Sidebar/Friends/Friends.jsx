import React from 'react'
import classes from './Friends.module.css'
import FriendItem from "./Friend/FriendItem";

const Friends = (props) => {

    let friendsData = [
        props.friendsData.map(friendItem => <FriendItem id={friendItem.userId} name={friendItem.name} img={friendItem.avatar}/>)
    ];

    return (
        <div className={classes.friendsBlock}>
            <h3>Мои друзья</h3>
            <ul>
                {friendsData}
            </ul>
        </div>
    )
};

export default Friends;
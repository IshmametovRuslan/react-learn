import React from 'react';
import classes from "./UserData.module.css";

const UserData = () => {
    return (
        <div className={classes.userData}>
            <div className={classes.userAvatar}><img
                src="https://lh3.googleusercontent.com/aR34MxRBretppyADbJcfqIZp-LraO1ELhk00lTZw0Q7MF1ebUKZeggeQkjBuZCCmYRSYNzr8=w640-h400-e365"
                alt=""/>
            </div>
            <div className={classes.userInfo}>
                <p>Name: Ruslan</p>
                <p>Age: 28</p>
                <p>City: Moscow</p>
                <p>WebDev</p>
            </div>
        </div>
    );
}

export default UserData;
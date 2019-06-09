import React from 'react';
import classes from "./ChatBlock.module.css";
import Post from "./Post/Post";

const ChatBlock = () => {
    return (
        <div className={classes.chatBlock}>
            <div className={classes.addPost}>
                Add message
            </div>
            <div className={classes.posts}>
               <Post/>
            </div>
        </div>

    );
}

export default ChatBlock;
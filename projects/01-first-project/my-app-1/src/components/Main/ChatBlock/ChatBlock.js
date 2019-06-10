import React from 'react';
import classes from "./ChatBlock.module.css";
import Post from "./Post/Post";
import PostForm from "./TextForm/TextForm";

const ChatBlock = () => {
    return (
        <div className={classes.chatBlock}>
            <PostForm/>
            <div className={classes.posts}>
               <Post message={"Hello! How are you?"} likeCounts={"11"}/>
               <Post message={"Hi! I'm fine!"} likeCounts={"33"}/>
            </div>
        </div>

    );
}

export default ChatBlock;
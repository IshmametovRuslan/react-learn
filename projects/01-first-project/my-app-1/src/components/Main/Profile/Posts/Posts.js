import React from 'react';
import classes from "./Posts.module.css";
import Post from "./Post/Post";
import PostForm from "../TextForm/TextForm";

const Posts = (props) => {

    let postData = props.postData;

    let post = [
        postData.map(post => <Post post={post.postText} likeCounts={post.likeCount} id={post.postId}/>)
    ];

    return (
        <div className={classes.chatBlock}>
            <PostForm/>
            <div className={classes.postsBlock}>
                {post}
            </div>
        </div>

    );
};

export default Posts;
import React from 'react';
import classes from "./Posts.module.css";
import Post from "./Post/Post";
import PostForm from "../TextForm/TextForm";

const Posts = () => {

    let postData = [
        {postId: 1, postText: "Hello1 it's firdt post!", likeCount: 11},
        {postId: 2, postText: "Heheyhey", likeCount: 2},
        {postId: 3, postText: "What is it?", likeCount: 3},
        {postId: 4, postText: "React it's cool", likeCount: 7}
    ];

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
}

export default Posts;
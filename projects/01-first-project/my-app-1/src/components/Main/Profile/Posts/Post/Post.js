import React from 'react';
import classes from "./Post.module.css";


const Post = (props) => {

    let id = props.id;
    let post = props.post;
    let likeCount = props.likeCounts;

    return (
        <div className={classes.post} data-post_id={id}>
            {post}
            <div>
                <span>Like - {likeCount}</span>
            </div>
        </div>
    );
};

export default Post;
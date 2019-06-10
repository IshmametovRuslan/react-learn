import React from 'react';
import classes from "../ChatBlock.module.css";

const Post = (props) => {
    return (
        <div className={classes.post}>
            {props.message}
            <div>
                <span>Like - {props.likeCounts}</span>
            </div>
        </div>
    );
}

export default Post;
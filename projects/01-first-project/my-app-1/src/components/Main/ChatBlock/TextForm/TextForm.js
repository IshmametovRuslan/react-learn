import React from 'react'
import classes from "./TextForm.module.css";

const PostForm = () => {
    return (
        <div className={classes.addPost}>
            <textarea name="text" id="text" cols="30" rows="2"></textarea>
            <button>Send</button>
        </div>
    );
}

export default PostForm;
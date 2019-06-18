import React from 'react'
import classes from "./TextForm.module.css";

const PostForm = (props) => {

    let newPostElement = React.createRef();

    let addNewPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };

    return (
        <div className={classes.addPost}>
            <textarea ref={ newPostElement } id="text" cols="30" rows="2"></textarea>
            <button onClick={ addNewPost }>Send</button>
        </div>
    );
};

export default PostForm;
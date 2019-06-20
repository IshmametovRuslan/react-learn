import React from 'react'
import classes from "./TextForm.module.css";

const PostForm = (props) => {

    let newPostElement = React.createRef();

    /* Отправляем данные в state по клику на кнопку */
    let addNewPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };

    /* Пропускаем данные через state по нажатию клавиши */
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={classes.addPost}>
            <textarea onChange={onPostChange}
                      ref={newPostElement}
                      value={props.newPostText}
                      id="text" cols="30" rows="2"/>
            <button onClick={addNewPost}>Send</button>
        </div>
    );
};

export default PostForm;
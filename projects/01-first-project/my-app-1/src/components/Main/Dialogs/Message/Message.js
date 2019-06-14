import classes from "./Message.module.css";
import React from "react";

const Message = (props) => {

    let message = props.message;
    let id = props.id;

    return (
        <div className={classes.message} data-id={id}>{message}</div>
    );
};

export default Message;
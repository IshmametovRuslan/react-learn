import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogData = props.dialogData.dialogsData;
    let messageData = props.dialogData.messageData;

    let dialogElements = [
        dialogData.map( dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    ];

    let messageElements = [
        messageData.map( messData => <Message message={messData.message} id={messData.id}/>)
    ];

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;
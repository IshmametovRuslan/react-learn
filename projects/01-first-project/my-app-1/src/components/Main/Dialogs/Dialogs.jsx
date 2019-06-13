import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"

const Message = (props) => {

    let message = props.message;
    let id = props.id;

    return (
    <div className={classes.message} data-id={id}>{message}</div>
    )
}

const Dialogs = (props) => {

    let dialogData = [
        {id: 1, name:"Russ"},
        {id: 2, name:"Tanya"},
        {id: 3, name:"Dima"},
        {id: 4, name:"Stas"},
        {id: 5, name:"Vit"}
    ];

    let messageData = [
        {id: 1, message:"Hello dirty world!"},
        {id: 2, message:"О дивный новый мир!"},
        {id: 3, message:"Не нужно больше ждать"},
        {id: 4, message:"В наших руках наша правда и вера"},
        {id: 5, message:"1984"}
    ]

    let dialogElements = [
        dialogData.map( dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    ]

    let messageElements = [
        messageData.map( messData => <Message message={messData.message} id={messData.id}/>)
    ]

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
}

export default Dialogs;
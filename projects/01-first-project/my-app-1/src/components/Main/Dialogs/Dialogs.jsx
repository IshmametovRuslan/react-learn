import React from 'react'
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogItems}>
                <div className={classes.dialog + ' ' + classes.active}>Russ</div>
                <div className={classes.dialog}>Serg</div>
                <div className={classes.dialog}>Tanya</div>
                <div className={classes.dialog}>Stas</div>
                <div className={classes.dialog}>Vit</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hello dear</div>
                <div className={classes.message}>Hi bro</div>
                <div className={classes.message}>How are you</div>
                <div className={classes.message}>i'm fine</div>
            </div>
        </div>
    );
}

export default Dialogs;
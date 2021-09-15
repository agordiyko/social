import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import DialogItem from './DialogItem/DialogItem';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";





const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>Dialogs</h2>
            <div className={classes.container}>
                <ul className={classes.nameList}>
                    {dialogsElements}

                </ul>
                <div className={classes.wrap}>
                    <Dialog messages={props.state.messages}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
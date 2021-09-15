import React from 'react';
import Message from './../Message/Message';
import classes from './Dialog.module.css';

const Avatar = (props) => {
    return (
        <div className={classes.hold}>
            <div className={classes.image}></div>
            <div className={classes.name}>{props.name}</div>
        </div>
    )
}

const Dialog = (props) => {
    let messagesElements = props.messages.map( message => <Message message={message.message}/>)

    return (
        <div className={classes.wrap}>
            {messagesElements}
            {/*<div className={classes.item}>*/}
            {/*    <Avatar name="Liam"/>*/}
            {/*    <Message message={messagesData[0].message}/>*/}
            {/*</div>*/}
            {/*<div className={classes.item}>*/}
            {/*    <Avatar name="John"/>*/}
            {/*    <Message message={messagesData[1].message}/>*/}
            {/*</div>*/}
            {/*<div className={classes.item}>*/}
            {/*    <Avatar name="William"/>*/}
            {/*    <Message message={messagesData[2].message}/>*/}
            {/*</div>*/}
            {/*<div className={classes.item}>*/}
            {/*    <Avatar name="James"/>*/}
            {/*    <Message message={messagesData[3].message}/>*/}
            {/*</div>*/}
        </div>
    )
}

export default Dialog;
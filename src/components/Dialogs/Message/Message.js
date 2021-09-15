import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {
    return (

        <div className={classes.text}>{props.message}
            <div className={classes.triangle}></div>
        </div>
    )
}

export default Message;
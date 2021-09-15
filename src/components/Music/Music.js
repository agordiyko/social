import React from 'react';
import classes from './Music.module.css';

const Music = (props) => {
    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>This is my music</h2>
        </div>
    )
}

export default Music;
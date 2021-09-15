import React from 'react';
import classes from './Post.module.css';

console.log(classes)
const Post = (props) => {

    return (
        <div className={classes.wrap}>
            <div className={classes.pic}></div>
            <div className={classes.text}>{props.message} <span>Like {props.likeCount}</span></div>
        </div>
    )
}

export default Post;

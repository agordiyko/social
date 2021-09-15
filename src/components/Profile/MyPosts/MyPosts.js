import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

let newPostElement = React.createRef();



const MyPosts = (props) => {
    let postElements = props.posts.map( post => <Post message={post.message} likeCount={post.likeCount}/>)

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.posts}>
            <div className={classes.new}>
                <div className={classes.subtitle}>My posts</div>
                <div className={classes.item}>
                    <textarea onChange={onPostChange} ref={newPostElement} className={classes.input} type="textarea" value={props.newPostText} />
                </div>
                <div className={classes.item}>
                    <button onClick={addPost} className={classes.submit}>Add post</button>
                </div>
            </div>
            <div className={classes.old}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;

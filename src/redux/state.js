let store = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'Hey, why nobody love me?', likeCount: 15},
                {id: 2, message: 'It`s my first post', likeCount: 20},
            ],
            newPostText: 'Its a new dawn, its a new day, its a new life for me, And Im feeling good!'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'I am a normal popover and I can have text and everything.'},
                {id: 2, message: 'Yes U are great!'},
                {id: 3, message: 'How is it going?'},
                {id: 4, message: 'Yes, you can!'},
            ],
            dialogs: [
                {id: 1, name: 'Liam'},
                {id: 2, name: 'Noah'},
                {id: 3, name: 'William'},
                {id: 4, name: 'James'},
                {id: 5, name: 'Oliver'},
                {id: 6, name: 'Benjamin'},
                {id: 7, name: 'Lucas'},
                {id: 8, name: 'Mason'},
                {id: 9, name: 'Logan'},
                {id: 10, name: 'Ethan'}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state is changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    ubscribe(observer) {
        this._callSubscriber = observer;
    }

}

export default store;

window.store = store;
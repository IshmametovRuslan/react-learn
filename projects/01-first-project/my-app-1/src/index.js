import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    {postId: 1, postText: "Hello1 it's firdt post!", likeCount: 11},
    {postId: 2, postText: "Heheyhey", likeCount: 2},
    {postId: 3, postText: "What is it?", likeCount: 3},
    {postId: 4, postText: "React it's cool", likeCount: 7}
];

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
];

ReactDOM.render(<App postData={postData} dialogData={dialogData} messageData={messageData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

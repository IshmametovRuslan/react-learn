import './App.css';
import React from 'react';
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Main/Profile/Profile";
import Dialogs from "./components/Main/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import classes from "./components/Main/Profile/Profile.module.css";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/Main/News/News";
import About from "./components/Main/About/About";

const App = (props) => {

    return (
        <div className="appWrapper">
            <Header/>
            <Sidebar sidebarData={props.state.sidebar}/>
            <div className={classes.main}>
                <Route path={"/profile"} render={() => <Profile postData={props.state.profilePage} addPost={props.addPost}/>}/>
                <Route path={"/dialogs"} render={() => <Dialogs dialogData={props.state.dialogsPage}/>}/>
                <Route path={"/news"} render={News}/>
                <Route path={"/about"} render={About}/>
            </div>
        </div>
    );
};
export default App;

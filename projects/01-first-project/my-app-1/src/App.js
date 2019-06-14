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
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <Sidebar sidebarData={props.state.sidebar}/>
                <div className={classes.main}>
                    <Route path={"/profile"} component={() => <Profile postData={props.state.profilePage}/>}/>
                    <Route path={"/dialogs"} component={() => <Dialogs dialogData={props.state.dialogsPage}/>}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/about"} component={About}/>
                </div>
            </div>
        </BrowserRouter>

    );
};
export default App;

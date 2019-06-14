//import React from 'react';
import './App.css';
import React from 'react';
import Nav from "./components/Nav/Nav";
import Profile from "./components/Main/Profile/Profile";
import Dialogs from "./components/Main/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import classes from "./components/Main/Profile/Profile.module.css";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/Main/News/News";
import About from "./components/Main/About/About";


const App = () => {

    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <Nav/>
                <div className={classes.main}>
                    <Route path={"/profile"} component={Profile}/>
                    <Route path={"/dialogs"} component={Dialogs}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/about"} component={About}/>
                </div>
            </div>
        </BrowserRouter>

    );
};
export default App;

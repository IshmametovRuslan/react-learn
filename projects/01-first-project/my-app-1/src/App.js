import React from 'react';
import './App.css';

import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import classes from "./components/Main/Main.module.css";

const App = () => {
    return (
        <div className="appWrapper">
            <Header/>
            <Nav/>

            <div className={classes.main}>
                <Dialogs/>
                {/*<Main/>*/}
            </div>
        </div>
    );
}

export default App;

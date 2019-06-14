import React from 'react';
import './Sidebar.module.css';
import Navigation from "./Navigation/Navigation";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
    return (
        <aside>
            <Navigation navData={props.sidebarData.navData}/>
            <Friends friendsData={props.sidebarData.friendsData}/>
        </aside>
    );
};

export default Sidebar;
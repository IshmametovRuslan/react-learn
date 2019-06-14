import React from 'react';
import Posts from "./Posts/Posts";
import UserData from "./UserData/UserData";
import HeadProfile from "./HeadProfile/HeadProfile";

const Profile = () => {
    return (
        <div>
            <HeadProfile/>
            <UserData/>
            <Posts/>
        </div>
    );
};

export default Profile;
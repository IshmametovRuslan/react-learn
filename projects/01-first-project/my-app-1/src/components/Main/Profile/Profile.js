import React from 'react';
import Posts from "./Posts/Posts";
import UserData from "./UserData/UserData";
import HeadProfile from "./HeadProfile/HeadProfile";

const Profile = (props) => {
    return (
        <div>
            <HeadProfile/>
            <UserData/>
            <Posts postData={props.postData}/>
        </div>
    );
};

export default Profile;
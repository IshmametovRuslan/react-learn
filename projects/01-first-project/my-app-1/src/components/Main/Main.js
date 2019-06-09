import React from 'react';
import classes from './Main.module.css';
import ChatBlock from "./ChatBlock/ChatBlock";
import UserData from "./UserData/UserData";

const Main = () => {
	return (
		<div className={classes.main}>
			<div className={classes.headImage}>
				<img
					src="https://natworld.info/wp-content/uploads/2018/01/%D0%A1%D0%BE%D1%87%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BC%D1%83-%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0-900x500.jpeg"
					alt=""/>
			</div>
			<UserData/>
			<ChatBlock/>
		</div>
	);
}

export default Main;
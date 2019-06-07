import React from 'react';

const Main = () => {
	return (
		<div className="main">
			<div className="headImage">
				<img
					src="https://natworld.info/wp-content/uploads/2018/01/%D0%A1%D0%BE%D1%87%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BC%D1%83-%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0-900x500.jpeg"
					alt=""/>
			</div>
			<div className="userData">
				<div className="userAvatar"><img
					src="https://lh3.googleusercontent.com/aR34MxRBretppyADbJcfqIZp-LraO1ELhk00lTZw0Q7MF1ebUKZeggeQkjBuZCCmYRSYNzr8=w640-h400-e365"
					alt=""/>
				</div>
				<div className="userInfo">
					<p>Name: Ruslan</p>
					<p>Age: 28</p>
					<p>City: Moscow</p>
					<p>WebDev</p>
				</div>
			</div>
			<div className="chatBlock">
				<div className="addMess">
					Add message
				</div>
				<div className="messages">
					<div className="message">
						Message1
					</div>
					<div className="message">
						Message2
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
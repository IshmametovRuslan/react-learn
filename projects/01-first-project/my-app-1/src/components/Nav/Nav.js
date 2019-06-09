import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
	return (
		<nav className={classes.menu}>
			<ul>
				<li><a href="#">Profile</a></li>
				<li><a href="#">Messages</a></li>
				<li><a href="#">Content</a></li>
				<li><a href="#">Peoples</a></li>
			</ul>
		</nav>
	);
}

export default Nav;
import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
	return (
		<nav className={classes.menu}>
			<ul>
				<li><a href="/profile">Profile</a></li>
				<li><a href="/dialogs">Dialogs</a></li>
				<li><a href="/news">News</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</nav>
	);
}

export default Nav;
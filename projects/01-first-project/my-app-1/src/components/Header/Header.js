import React from 'react';
import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logoBlock}>
				<a href="/"></a>
			</div>
			<div>
				<h1>Russko - социальная сеть</h1>
			</div>
		</header>
	);
};

export default Header;
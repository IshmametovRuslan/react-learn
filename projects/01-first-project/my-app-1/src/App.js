import React from 'react';
import './App.css';

const App = () => {
	return (
		<div>
			<Header/>
			<TechList/>

		</div>
	);
}

const TechList = () => {
	return (
		<div>
			<h1>Technologies</h1>
			<ul>
				<li>Html</li>
				<li>CSS</li>
				<li>PHP</li>
				<li>JS</li>
			</ul>
		</div>
	)
}

const Header = () => {
	return (
		<div>
			<h1>Это шапка сайта</h1>
			<ul>
				<li><a href="#">1</a></li>
				<li><a href="#">2</a></li>
				<li><a href="#">3</a></li>
			</ul>
		</div>
);
}

export default App;

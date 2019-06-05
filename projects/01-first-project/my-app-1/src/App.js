import React from 'react';
import './App.css';
import TechList from './TechList';
import Header from "./Header";
import Footer from "./Footer";


const App = () => {
	return (
		<div>
		    <Header/>
			<TechList/>
			<Footer/>
		</div>
	);
}

export default App;

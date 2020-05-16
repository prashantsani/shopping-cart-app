import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';
import Header from './components/Header';
import './css/style.css';


render((<React.Fragment>
		<Header /> 
		<Router /> 
	   </React.Fragment>) , 
	   document.querySelector('#main')
);
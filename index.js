import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import paper2 from './paper2';
//import CardExampleExpandable from './card';

//import diffComponets from './cardsComponets.js';
//import grid from './grid'


import injectTapEventPlugin from 'react-tap-event-plugin';
 

injectTapEventPlugin();
ReactDOM.render(
	
  <App />,
  
  document.getElementById('root')
 
);

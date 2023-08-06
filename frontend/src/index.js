import React from 'react'; //LD where 'react' in the pacage name from which we are importing 
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

//LD we render this weird "<App />" into "document.getElementById('root')"
//the 'root' is the ID of the div I can finde in "index.html"
ReactDOM.render(<App />, document.getElementById('root'));

//LD that's where we do render our app. 
// In this case we do import "App.js" then we do render
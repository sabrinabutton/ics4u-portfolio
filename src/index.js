import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopTen from './TopTen';
import Navbar from './Navbar.js';
import * as serviceWorker from './serviceWorker';
import Background from './Background';

//render react app
ReactDOM.render(<Navbar/>, document.getElementById('navbar'));
ReactDOM.render(<Background/>, document.getElementById('background'));
ReactDOM.render(<TopTen />, document.getElementById('root'));



serviceWorker.unregister();

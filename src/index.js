import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProjectsPage from './ProjectsPage';
import Navbar from './Navbar.js';
import * as serviceWorker from './serviceWorker';

//render react app
ReactDOM.render(<ProjectsPage />, document.getElementById('root'));
ReactDOM.render(<Navbar/>, document.getElementById('navbar'));


serviceWorker.unregister();

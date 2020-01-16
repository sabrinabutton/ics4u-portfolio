import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProjectsPage from './ProjectsPage';
import Navbar from './Navbar.js';
import * as serviceWorker from './serviceWorker';

//render react app
ReactDOM.render(<Navbar/>, document.getElementById('navbar'));
ReactDOM.render(<ProjectsPage />, document.getElementById('root'));



serviceWorker.unregister();

import React from 'react';
import './App.css';
import Header from './Header.js';
import ProjectsBox from './ProjectsBox.js';
import {TOP_TEN} from './data';

function TopTenPage() {
  return (
    <div className="App">
        <Header title="My Top Ten" desc="Most important modules from ICS4U 2019. This includes work from Free Code Camp & Khan Academy."></Header>
        <ProjectsBox projects={TOP_TEN}/>
    </div>
  );
}

export default TopTenPage;
import React from 'react';
import styled from "styled-components";
import ProjectsPage from './ProjectsPage';
import AboutMePage from './AboutMePage';
import TopTen from './TopTen';
import ReactDOM from 'react-dom';
import {THEME_COLOR} from './constants.js';

const Container = styled.div`
  width: 20%;
  right: 0;
  margin-right: 0px;
  position: fixed;
  background: white;
  border-radius: 8px;
  height: auto;
  display: flex;
  flex-direction: column;
  top: 10%;
  z-index: 99;
`

const Tab = styled.div`
  width: 78%;
  text-align: center;
  vertical-align: center;
  margin: 1em;
  margin-right: 0px;
  padding: 1em;
  background: ${THEME_COLOR};
  color: white;
  border-radius:  8px;
  height: 1em;
  vertical-align: middle;
  :hover{
    cursor: pointer;
  }
`

function Menu() {
  function renderProjects(){
    ReactDOM.render(<ProjectsPage/>, document.getElementById('root'));
    removeMenuRender();
  }

  function renderAboutMe(){
    ReactDOM.render(<AboutMePage/>, document.getElementById('root'));
    removeMenuRender();
  }

  function renderTopTen(){
    ReactDOM.render(<TopTen/>, document.getElementById('root'));
    removeMenuRender();
  }
  
  function removeMenuRender(){
    ReactDOM.render(<div/>, document.getElementById('menu-drop-down'));
  }

  return (
    <div>
       <Container >
         <Tab onClick={renderProjects}>Bonus Projects</Tab>
         <Tab onClick={renderAboutMe}>About Me</Tab>
         <Tab onClick={renderTopTen}>Top Ten</Tab>
       </Container>
    </div>
  );
}

export default Menu;
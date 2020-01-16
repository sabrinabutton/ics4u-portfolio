import React from 'react';
import styled from "styled-components";
import ProjectsPage from './ProjectsPage';
import AboutMePage from './AboutMePage';
import TopTen from './TopTen';
import ReactDOM from 'react-dom';

const Container = styled.div`
  width: 20%;
  right: 0;
  position: absolute;
  background: white;
  box-shadow: 0px 0px 10px #A3618D
  border-radius: 8px;
  height: auto;
  display: flex;
  flex-direction: column;
`

const Tab = styled.div`
  width: 78%;
  text-align: center;
  vertical-align: center;
  margin: 1em;
  padding: 1em;
  background: white;
  box-shadow: 0px 0px 5px #A3618D
  border-radius: 8px;
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
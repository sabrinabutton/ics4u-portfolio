import React from 'react';
import './App.css';
import styled from "styled-components";
import ghLogo from "./ghLogo.png";
import ReactDOM from 'react-dom';
import './index.css';
import ProjectBox from './ProjectsBox';

const Bar = styled.div`
    background: #99ff99;
    padding-left: 1em;
    padding-right: 1em;
    width: 100%;
    height: 8%;
    display: flex;
    text-align: center;
`;

const Title = styled.h1`
    font-weight: 200;
    font-size: 2em;
    color: white;
`;

const LogoLink = styled.img`
    padding: .5em;
    margin: 1em;
    right: 0;
`;

const MenuButton = styled.div`
  padding: .5em;
  margin: 1em;
  right: 0;
  position: absolute;
  width: 4em;
  height: 1em;
  border-radius: 8px;
  background-color: white;
  :hover{
    cursor: pointer;
  }
`

function Navbar() {
  function handleDropClick() {
    ReactDOM.render(<ProjectBox/>, document.getElementById('menu-drop-down'));
  }

  return (
    <div>
         <Bar>
            <Title>Sabrina Button's ICS4U Portfolio</Title>
            <a href="https://github.com/sabrinabutton">
                <LogoLink src={ghLogo} alt="Github"></LogoLink>    
            </a>
            <MenuButton onClick={handleDropClick}>Tea</MenuButton>
         </Bar>
    </div>
  );
}

export default Navbar;

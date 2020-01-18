import React, { useState } from "react";
import './App.css';
import styled from "styled-components";
import ghLogo from "./ghLogoA.png";
import ReactDOM from 'react-dom';
import './index.css';
import {THEME_COLOR} from './constants.js';
import Menu from './Menu';

const Bar = styled.div`
    background: ${THEME_COLOR};
    padding-left: 1em;
    padding-right: 1em;
    width: 100%;
    height: 10%;
    display: flex;
    text-align: center;
    position: fixed;
    z-index:99;
`;

const Title = styled.h1`
    font-weight: 200;
    font-size: 2em;
    color:#ffffff ;
`;

const LogoLink = styled.img`
    padding: .5em;
    margin: 1em;
`;
 
const MenuButton = styled.div`
  padding: .5em;
  margin: 1em;
  right: 2em;
  position: absolute;
  border-radius: 8px;
  background-color: ${THEME_COLOR};
  vertical-align: middle;
  color:#ffffff ;
  :hover{
    cursor: pointer;
  }
`

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleDropClick() {
    if(menuOpen){
      ReactDOM.render(<div/>, document.getElementById('menu-drop-down'));
    }
    else{
      ReactDOM.render(<Menu/>, document.getElementById('menu-drop-down'));
    }
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
         <Bar>
            <Title>Sabrina Button's ICS4U Portfolio</Title>
            <a href="https://github.com/sabrinabutton">
                <LogoLink src={ghLogo} alt="Github"></LogoLink>    
            </a>
            <MenuButton onClick={handleDropClick}>☰</MenuButton>
         </Bar>
    </div>
  );
}

export default Navbar;

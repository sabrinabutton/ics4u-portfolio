import React, { useState } from "react";
import './App.css';
import styled from "styled-components";
import ghLogo from "./ghLogo.png";
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './Menu';

const Bar = styled.div`
    background: #ffffff;
    padding-left: 1em;
    padding-right: 1em;
    width: 100%;
    height: 8%;
    display: flex;
    text-align: center;
    box-shadow:10px 0px 10px #A3618D; 
`;

const Title = styled.h1`
    font-weight: 200;
    font-size: 2em;
    color: #A3618D;
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
  width: 2em;
  height: 2em;
  border-radius: 8px;
  background-color: white;
  box-shadow:0px 0px 10px #A3618D; 
  vertical-align: middle;
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

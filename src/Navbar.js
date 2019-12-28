import React from 'react';
import './App.css';
import styled from "styled-components";
import ghLogo from "./ghLogo.png";

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

function Navbar() {
  return (
    <div>
         <Bar>
            <Title>Sabrina Button's ICS4U Portfolio</Title>
            <a href="https://github.com/sabrinabutton">
                <LogoLink src={ghLogo} alt="Github"></LogoLink>    
            </a>
         </Bar>
    </div>
  );
}

export default Navbar;

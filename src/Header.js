import React from 'react';
import styled from "styled-components";

const Title = styled.h1`
    font-weight: 200;
    font-size: 2em;
    color: white;
    text-shadow: 4px 4px 8px #009900;
`;
const Desc = styled.p`
font-weight: 200;
font-size: 1em;
color: white;
text-shadow:    4px 4px 8px #009900;
`;

function Header() {
  return (
    <div>
            <Title>My Projects</Title>
            <Desc>This website is a collection of my projects from ICS4U 2019. 
                It includes my work from HackEd, FreeCodeCamp, KhanAcademy and Coding Train.</Desc>
    </div>
  );
}

export default Header;
import React from 'react';
import styled from "styled-components";

const Title = styled.h1`
    font-weight: 200;
    font-size: 2em;
    color: #A3618D;

`;
const Desc = styled.p`
margin: 1em;
font-weight: 200;
font-size: 1em;
color:#A3618D;

`;

function Header(props) {
  return (
    <div>
            <Title>{props.title}</Title>
  <Desc>{props.desc}</Desc>
    </div>
  );
}

export default Header;

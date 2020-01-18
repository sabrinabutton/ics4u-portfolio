import React from 'react';
import styled from "styled-components";
import {DARK_TEXT_COLOR} from './constants';

const Title = styled.h1`
    font-weight:400;
    font-size: 2em;
    color:  ${DARK_TEXT_COLOR};

`;
const Desc = styled.p`
    margin: 1em;
    font-weight: 200;
    font-size: 1em;
    color: ${DARK_TEXT_COLOR};
`;
const Divider = styled.div`
    width: 30%;
    height: 1px;
    margin: 1em;
    background-color: ${DARK_TEXT_COLOR};
    position: absolute;
    left: 34%;
`

function Header(props) {
  return (
    <div>
           <Title>{props.title}</Title> 
            <Desc>{props.desc}</Desc>
            <Divider />
    </div>
  );
}

export default Header;

import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 3em auto;
    padding: 1em;
`

const Title = styled.h1`
    font-weight:400;
    font-size: 2em;
    color:  white;
`;
const Desc = styled.p`
    margin: 1em;
    font-weight: 200;
    font-size: 1em;

    color: white;
`;

function Header(props) {
  return (
    <div>
         <Wrapper><Title>{props.title}</Title> 
            <Desc>{props.desc}</Desc>
          </Wrapper>
           
    </div>
  );
}

export default Header;

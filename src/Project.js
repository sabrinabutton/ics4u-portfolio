import React from 'react';
import styled from "styled-components";

const Box = styled.div`
    display: flex;
    flex-direction: column;
    background:white;
    border-radius: 8px;
    width: 50%;
    margin: 3em auto;
    box-shadow:0px 0px 10px #A3618D; 
`;

const Title = styled.h1`
    font-weight: 250;
    font-size: 2em;
    color: black;
    font-style: italic;
    
`;

const Desc = styled.div`
    font-weight: 200;
    font-size: 1em;
    color: black;
    margin:  1em ;
`;

const Screenshot = styled.img`
    margin: 1em auto;
    padding: 1em;
    width: 80%;
    height: auto;
`;

const Link = styled(Desc)`
    color:  #A3618D;
    margin:  1em auto;
    :hover{
        cursor: pointer;
    }
`;

function Project(props) {
  return (
    <div>
        <Box>
            <Title>{props.title}</Title>
            <Screenshot src={props.image} alt="Screenshot"></Screenshot>
            <Desc>{props.desc}</Desc>
            <Link>{props.link}</Link>
        </Box>
    </div>
  );
}

export default Project;
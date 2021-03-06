import React from 'react';
import styled from "styled-components";
import Iframe from 'react-iframe';
import {DARK_TEXT_COLOR} from './constants';

const Box = styled.div`
    display: flex;
    flex-direction: column;
    background:  white;
    border-radius: 8px;
    width: 50%;
    margin: 3em auto;
`;

const Title = styled.h1`
    font-weight: 250;
    font-size: 2em;
    color: ${DARK_TEXT_COLOR};
    font-style: italic;
`;

const Desc = styled.div`
    font-weight: 200;
    font-size: 1em;
    color:  ${DARK_TEXT_COLOR};
    margin:  1em ;
`;

const Screenshot = styled.img`
    margin: 1em auto;
    padding: 1em;
    width: 80%;
    height: auto;
`;

const Link = styled.a`
    color:  ${DARK_TEXT_COLOR};
    margin:  1em auto;
    :hover{
        cursor: pointer;
    }
`;

const Embed = styled(Iframe)`
    width: 90%;
    margin: 1em auto;
`

function Project(props) {
  return (
    <div>
        <Box>
            <Title>{props.title}</Title>
            {props.image &&
                 <Screenshot src={props.image} alt="Screenshot"></Screenshot>}
            <Desc>{props.desc}</Desc>
            <Link href={props.link}>{props.link_title}</Link>
        </Box>
        {
            props.embed ? <Embed scrolling="no" height="500" title="Markdown Previewer" url={props.embed}></Embed> : console.log(props.embed)
        }
        

    </div>
  );
}

export default Project;
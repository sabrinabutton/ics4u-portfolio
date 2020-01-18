import React from 'react';
import Project from './Project.js';
import styled from "styled-components";

const Box = styled.div`
    display: flex;
    flex-direction: column;
`;

function ProjectBox(props) {
  return (
    <div>
        <Box>
          {props.projects.map((project, i) => (
           <Project title={project.title} desc={project.desc} image={project.image} link={project.link} key={i}/>
          ))}
        </Box>
    </div>
  );
}

export default ProjectBox;
import React from 'react';
import Project from './Project.js';
import styled from "styled-components";

const Box = styled.div`
    display: flex;
    flex-direction: column;
`;

function ProjectBox() {
  return (
    <div>
        <Box>
            <Project title="FreeCodeCamp Certifications" image="" link="https://www.freecodecamp.org/sabrinabutton" 
            desc="I completed four Certifications on FreeCodeCamp: Responsive Web Design, Javascript Algorithms and Data Structures, 
            Front End Libraries and Data Visualization." ></Project>
            <Project title="Khan Acadmey" image="" link="https://www.khanacademy.org/profile/sabrinabutton" 
            desc="On Khan Academy, I have completed: AP Computer Science Principles, Computer Science Algorithms, Natural Simulations, HTML/CSS, Intro to JS, JS Games, HTML/JS and Intro to SQL"></Project>
        </Box>
    </div>
  );
}

export default ProjectBox;
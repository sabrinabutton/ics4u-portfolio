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
            <Project title="test" image="https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218-1080x608.jpg" link="#" desc="A test project to test the project props." ></Project>
            <Project title="test2" image="http://www.melanniesvobodasnd.org/wp-content/uploads/2015/06/Oak-tree-in-field-007.jpg" link="#" desc="A second test project to test the flex property of the projectbox."></Project>
        </Box>
    </div>
  );
}

export default ProjectBox;
import React from 'react';
import styled from "styled-components";
import {THEME_COLOR} from './constants';

const BackgroundOverlay = styled.div`
    top: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background: ${THEME_COLOR}
    opacity: 0.3;

    filter: alpha(opacity=60);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

function Background(){
    return(
        <div>
           
            <BackgroundOverlay />
        </div>
    )
}

export default Background;
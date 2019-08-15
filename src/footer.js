import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    height: 100px;
    max-width: 61.9%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: #0B3D91;
    -webkit-box-shadow: -4px 5px 39px 0px rgba(0,0,0,1);
    -moz-box-shadow: -4px 5px 39px 0px rgba(0,0,0,1);
    box-shadow: -4px 5px 39px 0px rgba(0,0,0,1);
`;

const StyledH3 = styled.h3`
    color: white;
`;

const Footer = props => {
    return(
        <StyledDiv>
            <StyledH3>All Right Reserved: Nasa</StyledH3>
        </StyledDiv>
    );
};

export default Footer;
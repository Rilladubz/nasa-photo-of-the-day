import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    height: 100px;
    max-width: 61.9%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background-color: #0B3D91;
    -webkit-box-shadow: -4px 5px 39px 0px rgba(0,0,0,1);
    -moz-box-shadow: -4px 5px 39px 0px rgba(0,0,0,1);
    box-shadow: -4px 5px 39px 0px rgba(0,0,0,1);
`;

const HeaderH1 = styled.h1` 
    color: #FC3D21;
`;

const Header = props => {
    return (
        <div>
            <StyledDiv>
            <HeaderH1>{props.dataprops.title}</HeaderH1>
            </StyledDiv>
        </div>
    );
};

export default Header;
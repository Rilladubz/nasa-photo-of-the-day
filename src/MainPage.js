import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.section`
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 60%;
    -webkit-box-shadow: -4px 5px 39px -13px rgba(247,247,247,1);
    -moz-box-shadow: -4px 5px 39px -13px rgba(247,247,247,1);
    box-shadow: -4px 5px 39px -13px rgba(247,247,247,1);
    padding: 1rem;
`;

const Img = styled.img`
    max-width: 80%;
    height: auto;
    margin: 10px 10px;
    -webkit-box-shadow: -4px 5px 39px 0px rgba(0,0,0,1);
    -moz-box-shadow: -4px 5px 39px 0px rgba(0,0,0,1);
    box-shadow: -4px 5px 39px 0px rgba(0,0,0,1);
`;

const StyledExplanation = styled.p`
    display: flex;
    margin: 0 auto;
    max-width: 75%;
    background-color: #282c34;
    padding: 2rem;
    color: white;
    -webkit-box-shadow: -4px 5px 39px 0px rgba(0,0,0,1);
    -moz-box-shadow: -4px 5px 39px 0px rgba(0,0,0,1);
    box-shadow: -4px 5px 39px 0px rgba(0,0,0,1);
`;

const MainPage = props => {
    console.log(props);
    return(
        <div>
            <WrapperDiv>
                <div className='imgWrapper'>
                    <h1>Date: {props.dataprops.date}</h1>
                    <Img src={props.dataprops.url} alt='This is taken by Nasa'></Img>
                    <StyledExplanation>{props.dataprops.explanation}</StyledExplanation>
                </div>
            </WrapperDiv>
        </div>
    );
};

export default MainPage;
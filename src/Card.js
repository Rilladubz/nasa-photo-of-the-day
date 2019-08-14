import React from 'react';
import styled from 'styled-components';

const ThisDiv = styled.div`
    border: 1px solid red;
`;

export default function Card (props) {
    return (
        <div>
            <div className='Title'>I'm Here</div>
            {/* <img src={}></img> */}
            <ThisDiv>Here is THAT div</ThisDiv>
        </div>
    )
}
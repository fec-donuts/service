import React from 'react';
import styled, { keyframes } from 'styled-components';

const Stars = (props) => {
    const Img = styled.img`
        display: inline-block;
        padding: 2rem 1rem;
        font-size: 1.2rem;
        width: 90px;
        height: 25px;
        `;


    return (
        <Img src="../../Test_Image/sampleStars.jpeg" alt="Stars"></Img>
    )

}

export default Stars;
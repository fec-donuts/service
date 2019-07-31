import React from 'react';
import styled, { keyframes } from 'styled-components';




const Photo = (props) => {

    const rotate = keyframes`
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
        `;


    const Img = styled.img`
        display: inline-block;
        animation: ${rotate} 2s linear infinite;
        padding: 2rem 1rem;
        font-size: 1.2rem;
        
        `;

    return (
        <Img src="../../Test_Image/testShoe.png" alt="Test Shoe"></Img>
    )

}

export default Photo;
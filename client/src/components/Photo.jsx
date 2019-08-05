import React from 'react';
import styled from 'styled-components';
const faker = require('faker');

 const Photo = (props) => {
 
  const img = styled.img`
    display:flex;
    padding: 2rem 1rem;
    font-size: 1.2rem;
    width: 150px;
    height: 100px;
    float: screenLeft; 
  `;
  return (
      <img src={faker.image.avatar()} alt="prop" />
  )

 };

 export default Photo;

import React from 'react';

const image = {
    display: 'flex',
    padding: '2rem 1rem',
    width: '150px',
    height: '100px',
    float: 'left'
}

const Photo = (props) => {


    return (
        <img style={image} src={props.photo} alt="" ></img>
    )

}

export default Photo;
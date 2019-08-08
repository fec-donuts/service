import React from 'react';






const Photo = (props) => {



    const image = {
        display: 'flex',
        padding: '2rem 1rem',
        width: '150px',
        height: '100px',
        float: 'left'

    }
    
        return (
                <img style={image} src={props.photo} alt="" ></img>
        )

}

export default Photo;
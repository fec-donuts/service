import React from 'react';
import StarRatings from 'react-star-ratings';

const Stars = (props) => {

    return (
        <StarRatings
            rating={props.stars}
            starRatedColor="gold"
            numberOfStars={5}
            name='rating'
            starDimension="25px"
            starSpacing="3px"
        />
    )

}

export default Stars;
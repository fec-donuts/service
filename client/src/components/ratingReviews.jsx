import React from 'react';
import ReactDOM from 'react-dom';

const RatingReviews = (props) => {
 return(
    <div>
        <h4>  NAME {props.name}  </h4>
        <h4>  PRODUCT {props.brand}{props.item}  </h4>
        <h4>  REVIEWS  {props.reviews}</h4>

    </div>
 )
}

export default RatingReviews
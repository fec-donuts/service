import React from 'react';
import Photo from './Photo.jsx';
import Price from './Price.jsx';
import ProductName from './ProductName.jsx';
import Stars from './Stars.jsx';


const RelatedItems = (props) => {
        return (
            <div border='1'>
                <Photo photo={props.photo}/>
                    <div>
                        <ProductName productName={props.name}/>
                    </div>
                    <Stars stars={props.stars}/>
                    <Price price={props.price}/>
            </div>
        )
}


export default RelatedItems;
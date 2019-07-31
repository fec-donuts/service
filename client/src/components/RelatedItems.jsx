import React from 'react';
import Photo from './Photo.jsx';
import Price from './Price.jsx';
import ProductName from './ProductName.jsx';
import Stars from './Stars.jsx';



class RelatedItems extends React.Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }









    render () {
        return (
            <div border='1'>
                <h1>Related Items</h1>
                <Photo />
                <Stars />
            </div>
        )
    }
}



export default RelatedItems;
import React from 'react';
import Photo from './Photo.jsx';
import Price from './Price.jsx';
import ProductName from './ProductName.jsx';
import Stars from './Stars.jsx';
import styled, { keyframes } from 'styled-components';


const Div1 = styled.div`
    // position: relative;
    // float: left;
`;



class RelatedItems extends React.Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }









    render () {
        return (
            <div border='1'>
                <Photo photo={this.props.photo}/>
                    <div>
                        <ProductName productName={this.props.productName}/>
                    </div>
                    <Stars stars={this.props.stars}/>
                    <Price price={this.props.price}/>
            </div>
        )
    }
}



export default RelatedItems;
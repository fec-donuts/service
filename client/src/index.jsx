import React from 'react';
import ReactDOM from 'react-dom'
import RelatedItems from './components/RelatedItems.jsx';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import items from '../../dataCreater.js';


const Related = styled.div`
  margin: auto;
  width: 25%;
  padding: 10px;
  float: left;
`;

const Scroll = styled.div`
  width: 100%;
  display: inline-flex;
  overflow-x: scroll;
`;

const H1 = styled.h1`
  // border: 3px solid black;
`;

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        itemsTable: [],
      };
    
    }

    // create a get request to pull information to add to each component


    // create a function that loops through the table gained from the get
    // request to populate the data
  

    // create an on click function that will be used later to update the page
    // based on what is clicked

    buttonClick (e) {

    }

    // componentDidMount () {
    //   let count = 0;

    //   while (count < 6) {
    //     axios.post('/addItems', {array: items})
    //       .then( response => {
    //         this.setState({itemsTable: response.data})
    //       })
    //       .then(() => {
    //         count += 10;
    //       })
    //       .catch(err => {
    //         console.error(err);
    //       })
    //   }
    // }


    
  
    render() {
  
      return (
        // the related items component will be reduced later with information that can be mapped over
        <div>
          <H1>Related Items</H1>
          <Scroll>
            {items.map( (item, index) => {
              this.state.itemsTable.push(item);
              return (
                <Related key={index}>
                  <RelatedItems photo={item.image} price={item.price} productName={item.name} stars={item.stars}/> 
                </Related>
              )
            })}
          </Scroll>
          <button type="button" onClick={this.buttonClick.bind(this)}>Do not click this magical button! Kittens will explode!</button>
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById('app'));
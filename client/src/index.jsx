import React from 'react';
import ReactDOM from 'react-dom'
//import axios from 'axios';
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

    // componentDidMount () {
    //   let count = 0;

    //   while (count < 100) {
    //     axios.post('/addItems', )
    //       .then( response => {
    //         this.setState({itemsTable: response.data})
    //       })
    //       .then(() => {
    //         count += 5;
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
              return (
                <Related key={index}>
                  <RelatedItems photo={item.image} price={item.price} productName={item.name} stars={item.stars}/> 
                </Related>
              )
            })}
          </Scroll>
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById('app'));
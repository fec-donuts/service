import React from 'react';
import ReactDOM from 'react-dom'
//import axios from 'axios';
import RelatedItems from './components/RelatedItems.jsx';
import styled, { keyframes } from 'styled-components';

const Related = styled.div`
  margin: auto;
  width: 25%;
  // border: 3px solid black;
  padding: 10px;
  float: left;
`;

const scroll = styled.div`
  overflow: scroll;
  scroll-behavior: smooth;
`;

const H1 = styled.h1`
  border: 3px solid black;
`;


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    
    }

    // create a get request to pull information to add to each component


    // create a function that loops through the table gained from the get
    // request to populate the data
  

    // create an on click function that will be used later to update the page
    // based on what is clicked

    // create a down arrow button that refreshes the items with a new list, but
    // store old items with an up arrow to go back
    
  
    render() {
  
      return (
        <div>
          <H1>Related Items</H1>
          <scroll>
            <Related>
              <RelatedItems /> 
            </Related>
            <Related>
              <RelatedItems /> 
            </Related>
            <Related>
              <RelatedItems /> 
            </Related>
            <Related>
              <RelatedItems /> 
            </Related>
            <Related>
              <RelatedItems /> 
            </Related>

          </scroll>
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById('app'));
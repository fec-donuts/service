import React from 'react';
import ReactDOM from 'react-dom'
//import axios from 'axios';
import RelatedItems from './components/RelatedItems.jsx';
import styled, { keyframes } from 'styled-components';

const Related = styled.div`
  margin: auto;
  width: 100%;
  border: 3px solid black;
  padding: 10px;
  float: right;
`;


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    
    }
  
    
  
    render() {
  
      return (
        <div>
          <h1>Related Items</h1>
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
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById('app'));
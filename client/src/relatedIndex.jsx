import React from 'react';
import ReactDOM from 'react-dom';
import RelatedItems from './components/RelatedItems.jsx';
// import styled, { keyframes } from 'styled-components';
import axios from 'axios';
// import '../dist/style.css';
// import css from '../dist/style.css';
import ScrollArea from 'react-scrollbar';

const related = {
  margin: 'auto',
  width: '25%',
  padding: '10px',
  float: 'left'
}


const scroll = {
  width: '100%',
  display: 'inline-flex',
  overflowX: 'scroll'
}


// const H1 = styled.h1`
//   // border: 3px solid black;
// `;

export default class RelatedItemsApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        itemsTable: [],
        itemsRenderedCount: 0,
        itemsRendered: [],
        idsRendering: [],
      };
    
    }

    

    // create a function that loops through the table gained from the get
    // request to populate the data


  

    // create an on click function that will be used later to update the page
    // based on what is clicked


    buttonClick (e) {

    }

    componentDidMount () {
      while (this.state.idsRendering.length < 10) {
        let min = 0;
        let max = 100;
        let num = Math.floor(Math.random() * (max - min)) + min;
        if (!this.state.idsRendering.includes(num)) {
          this.state.idsRendering.push(num);
        }
      }      

      axios.get('/grabItems')
        .then ( response => {
          this.setState({itemsTable: response.data});
        })
        .catch(err => {
          console.error(err);
        })
    }




    
  
    render() { 
        return (
          <div>
            <h1>Related Items</h1>
            <div style={scroll}>
              {this.state.idsRendering.map( id => {
                return (
                  <div style={related} key={id}>
                    <RelatedItems name={this.state.itemsTable[id].name} photo={this.state.itemsTable[id].photo} price={this.state.itemsTable[id].price} stars={this.state.itemsTable[id].stars}/> 
                  </div>
                )
              })}
            </div>
          </div>
        );
      }
  }

  window.RelatedItemsApp = RelatedItemsApp;

  ReactDOM.render(
    React.createElement(RelatedItemsApp),
    document.getElementById('Related')
  );
import React from 'react';
import ReactDOM from 'react-dom';
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
        itemsRenderedCount: 0,
        itemsRendered: [],
      };
    
    }

    

    // create a function that loops through the table gained from the get
    // request to populate the data


  

    // create an on click function that will be used later to update the page
    // based on what is clicked

    buttonClick (e) {

    }

    componentDidMount () {
      axios.get('/grabItems')
        .then ( response => {
          this.setState({itemsTable: response.data})
        })
        // .then ( () => {
        //   for (let i = 0; i < this.state.itemsRenderedCount; i++) {
        //     let min = 0;
        //     let max = 116;
        //     let num = Math.floor(Math.random() * (max - min)) + min;
        //     this.setState({itemsRendered: itemsRendered.concat(this.state.itemsTable[num])})
        //   }
        // })
        .catch(err => {
          console.error(err);
        })
    }


    
  
    render() { 
        return (
          <div>
            <H1>Related Items</H1>
            <Scroll>
              {this.state.itemsTable.map( item => {
                if (this.state.itemsRenderedCount < 10) {
                  this.state.itemsRenderedCount++;
                  // this.setState({itemsRendered: this.state.itemsRendered.concat(item)})
                return(
                  <Related key={item.id}>
                    <RelatedItems name={item.name} photo={item.photo} price={item.price} stars={item.stars}/> 
                  </Related>
                )
                }
              })}
            </Scroll>
            <button type="button" onClick={this.buttonClick.bind(this)}>Do not click this magical button! Kittens will explode!</button>
          </div>
        );
      }
  }
  ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import data from './data'
import Shoe from './components/shoe.jsx'

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        price: '',
        itemName: '',
        itemDescription: '',
        pictureUrl: '',
        shoes: []
      };
    
    }
   

    handleClick(){
      console.log('You clicked me!')
      console.log('That hurt!')
    }
    
    componentDidMount() {
        let shoes = [];
        axios.get('/sponsored')
          .then(res => {
              res.data.map(function(shoe) {
                  let tuple = [];
                  tuple.push(shoe.price, shoe.itemName, shoe.itemDescription, shoe.pictureUrl);
                  shoes.push(tuple);
                });
                this.setState({
                    shoes: shoes
                  });
                  console.log(this.state.shoes);
                })
                .catch((err) => { console.log(err); });
            }
            
            
            
            
            render() {
              // console.log(data);
              //in here I wll map through the data and put each on in their individual div

      return (
        <div>
          <Shoe click={this.handleClick} shoes={this.state.shoes} price={this.state.price} itemName={this.state.itemName} itemDescription={this.state.itemDescription} pictureUrl={this.state.pictureUrl} />
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById('app'));
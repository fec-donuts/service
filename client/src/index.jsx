import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component'
import axios from 'axios';
import PercentageBar from './components/percentagebar.jsx';
import data from '../src/data';
import RatingReviews from './components/ratingReviews.jsx';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // users: [],
        // id: 0,
        // name: "",
        // brand: "",
        // item: "",
        // stars: 0,
        // review: ""
        data: data
      };

      this.componentDidMount = this.componentDidMount.bind(this)
      this.onStarClick = this.onStarClick.bind(this)
      this.onClick = this.onClick.bind(this)
    }
     
      componentDidMount(){

      }

      onStarClick(nextValue, prevValue, name) {
      this.setState({stars: nextValue});
      }

      onClick() {

      }
    
  
    render() {
      //const{rating} = this.state
  console.log(data)
      return (
        <div>
        <h1 className='title'>Customer Reviews</h1>
        <form id="1">
           <h4>Write Ratings: {this.stars}</h4>
          <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={this.stars}
          onStarClick={this.onStarClick}/> 
          <button type='button' onClick={this.onClick}>Write a review</button>
        </form>
        
         <p  key='5stars'>5stars </p> <input></input>
         <p  key='4stars'>4stars </p> <input></input>
         <p  key='3stars'>3stars </p> <input></input>
         <p  key='2stars'>2stars </p> <input></input>
         <p  key='1stars'>1stars </p> <input></input>
         
        <RatingReviews name={data.name} brand={this.state.brand} item={this.state.item} review={this.state.review}/>
         {/* <span id='5stars' key='5stars'>5stars <PercentageBar/></span> 
         <span id='4stars' key='4stars'>4stars <PercentageBar/></span> 
         <span id='3stars' key='3stars'>3stars <percentageBar/></span> 
         <span id='2stars' key='2stars'>2stars <PercentageBar/></span> 
         <span id='1stars' key='1stars'>1stars <PercentageBar name={this.state.name} brand={this.state.brand} item={this.state.item} stars={this.state.stars} review={this.state.review}/></span>  */}
        </div>
        
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById('app'));
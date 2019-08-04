import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        photos: []
      };
    
    }
  
    componentDidMount() {
      axios.post('/all') 
        .then(response =>{
        
        })
      
    }
  
    render() {
    
  
      return (
        <div>
       
            Hello from the other side.
        </div>
      );
    }
  }
ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
//import axios from 'axios';

class App extends React.Component {
    constructor(props) {
      super(props);
      // this.state = {
      //   question: '',
      //   answer: '',
      // };
      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    
  
    render() {
      return (
        <div>
          <h3>Have a Question</h3>
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react';
//import axios from 'axios';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    
    }
  
    
  

    render() {
      const { prices } = this.state;
  
      return (
        <div>
       
        Hello
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById('app'));
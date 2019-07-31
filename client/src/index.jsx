import React from 'react';
import ReactDOM from 'react-dom'
//import axios from 'axios';
import RelatedItems from './components/RelatedItems.jsx';


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
        <RelatedItems />
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById('app'));
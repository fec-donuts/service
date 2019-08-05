import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactImageMagnify from 'react-image-magnify';
//import Photo from './components/Photo.jsx';



class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        photos: [],
        id: 1
      };
    
    }
  
    componentDidMount() {
      axios.get('/singleObj', {params: {photoid: this.state.id}}) 
        .then(response =>{
        console.log(response, 'THIS IS WHAT YOU ARE LOOKING FOR' )
        this.setState({
          photos: response.data.rows
        })
        })
        .catch(error => console.error(error))
      
    }
  
    render() {
      return (
        <div>
          <h1>Hello from the other side.</h1>
          {/* <Photo photos={this.state.photos}/> */}
        </div>
      );
    }
  }
ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import DBForm from './components/DBForm.jsx';
import FakeForm from './components/FakeForm.jsx';
import axios from 'axios';
//import data from '../../database/data.csv';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //Product specifications from database
            Brand_Name: '',
            In_stock: '',
            Item_weight: '',
            Size: '',
            Manufacturer_Number: '',

            //Product Description from faker.js
            Product_Id: '',
            Product_Name: '',
            Product_Price: '',
            Product_Description: '',

            //conditional rendering
            isDBForm: true,
            isFakeForm: false,
            
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleFakeForm = this.handleFakeForm.bind(this);
        this.handleDBForm = this.handleDBForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleDBForm() {
        this.setState({
            isDBForm: true,
            isFakeForm: false
        });
    }

    

    handleFakeForm() {
        this.setState({
            isDBForm: false,
            isFakeForm: true
        });
    }

 

    handleSubmit() {
        axios.post('/pd', this.state)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }


    componentDidMount() {
        axios.get('/pd')
          .then((res) => {
            console.log(res.data);
            this.setState({
              input: res.data
            });
          })
          .catch (err => console.log('not working'));
      }


    render() {

            if (this.state.isDBForm === true) {
                return <DBForm change={this.handleChange} next={this.handleFakeForm}/>
            }
            if (this.state.isFakeForm === true) {
                return <FakeForm change={this.handleChange} back={this.handleDBForm}/>
            }
           
        
    }

}
  export default App
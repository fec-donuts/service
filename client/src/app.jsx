import React from 'react';
import Form1 from './components/Form1.jsx';
import Form2 from './components/Form2.js';
import axios from 'axios';

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
            isForm1: true,
            isForm2: false,
            
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleForm2 = this.handleForm2.bind(this);
        this.handleForm1 = this.handleForm1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleForm1() {
        this.setState({
            isForm1: true,
            isForm2: false
        });
    }

    

    handleForm2() {
        this.setState({
            isForm1: false,
            isForm2: true
        });
    }

 

    handleSubmit() {
        axios.post('/pd', this.state)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }


    render() {

            if (this.state.isForm1 === true) {
                return <Form1 change={this.handleChange} next={this.handleForm2}/>
            }
            if (this.state.isForm2 === true) {
                return <Form2 change={this.handleChange} back={this.handleForm1}/>
            }
           
        
    }

}
  export default App
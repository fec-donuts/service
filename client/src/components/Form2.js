import React from 'react';

const Form2 = props => {
    return (
        <div>
        <input type='text' name='Product_Id' placeholder='Product_Id' onChange={props.change}></input><br></br>
        <input type='text' name='Product_Name' placeholder='Product_Name' onChange={props.change}></input><br></br>
        <input type='text' name='Product_Price' placeholder='Product_Price' onChange={props.change}></input><br></br>
        <input type='text' name='Product_Description' placeholder='Product_Description' onChange={props.change}></input><br></br>
        
        <button onClick={props.back}>back</button>
        </div>
    )
}

export default Form2;
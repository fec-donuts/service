import React from 'react';

const Form1 = props => {
    return (
        <div>
        <input type='text' name='Brand_Name' placeholder='Brand_Name' onChange={props.change}></input><br></br>
        <input type='text' name='Pricing' placeholder='Pricing' onChange={props.change}></input><br></br>
        <input type='text' name='In_Stock' placeholder='In_Stock' onChange={props.change}></input><br></br>
        <input type='text' name='Item_weight' placeholder='Item_weight' onChange={props.change}></input><br></br>
        <input type='text' name='Size' placeholder='Size' onChange={props.change}></input><br></br>
        <input type='text' name='Manufacturer_Number' placeholder='Manufacturer_Number' onChange={props.change}></input><br></br>
        
        <button onClick={props.next}>next</button>
        </div>
    )
}

export default Form1;
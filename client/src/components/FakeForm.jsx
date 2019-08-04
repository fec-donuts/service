import React from 'react';

const FakeForm = props => {
    return (
        <div>

        <h4>  
        Product Description             
        </h4>

            <p> 
                <input type='text' name='Product_Id' placeholder='Product_Id' onChange={props.change}></input><br></br>
            </p>
        
            <p> 
                <input type='text' name='Product_Name' placeholder='Product_Name' onChange={props.change}></input><br></br>
            </p>

            <p> 
                <input type='text' name='Product_Price' placeholder='Product_Price' onChange={props.change}></input><br></br>
            </p>

            <p> 
                <input type='text' name='Product_Description' placeholder='Product_Description' onChange={props.change}></input><br></br>
            </p> 

            <p> 
                <button onClick={props.back}>back</button>
            </p> 

        </div>
    )
}

export default FakeForm;
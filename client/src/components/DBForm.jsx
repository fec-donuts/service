import React from 'react';

const DBForm = props => {

    console.log(props.inputs);

        return (


            <div>

            <h4>
            Product Description
            </h4>
            
                <p type='text' name='Brand_Name' placeholder='Brand_Name' onChange={props.change}> Brand {props.Brand_Name}
                </p>
            
                <p type='text' name='Pricing' placeholder='Pricing' onChange={props.change}> Price {props.Pricing}
                </p>
            
                <p type='text' name='In_Stock' placeholder='In_Stock' onChange={props.change}> In Stock {props.In_Stock}
                </p>
            
                <p type='text' name='Item_Weight' placeholder='Item_Weight' onChange={props.change}> Weight {props.Item_Weight}
                </p>
            
                <p type='text' name='Size' placeholder='Size' onChange={props.change}> Size  {props.Size}
                </p>
            
                <p type='text' name='Manufacturer_Number' placeholder='Manufacturer_Number' onChange={props.change}> Manufacturer Number {props.Manufacturer_Number}
                </p>
            
                <p> 
            
                </p>
            
            </div>
        
        )
    }


export default DBForm;

        // <button onClick={props.next}>next</button>


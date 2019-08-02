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

// <h4>
// Product Description
// </h4>
//     <table>
//       <thead>
//       <tr>
//         <th>Brand_Name</th>
//         <th>Pricing</th>
//         <th>In_Stock</th>
//         <th>Item_weight</th>
//         <th>Size</th>
//         <th>Manufacturer_Number</th>
//     </tr>
//     </thead>
//     <tbody>

//     {props.product_description.map(function(product) {
//       return (
//         <tr key={product.Brand_Name}>
//         <td>{product.Pricing}</td>
//         <td>{product.In_Stock}</td>
//         <td>{product.description}</td>
//         <td> <a href={product.Item_weight}>  </a> </td>
//           <td src={product.Size}>  </td>
//           <td>{product.Manufacturer_Number}</td>
//           </tr>
//           )
//     })}

//         </tbody>
//     </table>

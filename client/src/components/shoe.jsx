import React from 'react';
// import reactDOM from 'react-dom';

const Shoe = (props) => {




// console.log(props.shoes)

return (
  <div className='scroll'>
          {props.indexArr.map((num,i) => {
            console.log(num)
              // let price = shoe[0]
              // let itemName = shoe[1]
              // let itemDes = shoe[2]
              // let itemUrl = shoe[3]
              // console.log(props.indexArr)
              return(
                <div key={i}>
              <u>{props.shoes[num][1] + ' ' + props.shoes[num][0]}</u>
                  <img key={i} onClick={props.click} className="shoe" height={40} src={props.shoes[num][3]} />
                <u>{props.shoes[num][2]}</u>
              </div>
            )
          })
          
        }
      </div>
    );
  };
  
  export default Shoe;

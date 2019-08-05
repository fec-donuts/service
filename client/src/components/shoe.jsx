import React from 'react';
// import reactDOM from 'react-dom';

const Shoe = (props) => {
    return (
      <div className='scroll'>
          {props.shoes.map((shoe, i) => {
            // console.log(shoe);
            while(i<6){

              return(
                
                <div key={i}>
              <u>{shoe[1] + shoe[0]}</u>
                  <img key={i} onClick={props.click} className="shoe" height={40} src={shoe[3]} />
                <u>{shoe[2]}</u>
              </div>

              )
            }
          })

          }
      </div>
    );
  };
  
  export default Shoe;

import React from 'react';
import faker from 'faker';

const Price = (props) => {

    return (
        <p>${faker.random.number(500)}</p>
    )

}

export default Price;
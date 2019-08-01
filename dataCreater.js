const faker = require('faker');

const product1 = faker.commerce.product();
const product2 = faker.commerce.product();
const product3 = faker.commerce.product();
const product4 = faker.commerce.product();


const photos = [
    {image: faker.image.fashion()},
    {image: faker.image.nature()},
    {image: faker.image.nightlife()},
    {image: faker.image.technics()},
    {image: faker.image.sports()},
    {image: faker.image.transport()}
]


// module.exports = {product1, product2, product3, product4}

export default photos;
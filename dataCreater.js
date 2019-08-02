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
    {image: faker.image.transport()},
    {image: faker.image.cats()},
    {image: faker.image.city()},
    {image: faker.image.business()}
]

const productNames = [
    {name: faker.lorem.sentence(6)},
    {name: faker.lorem.sentence(8)},
    {name: faker.lorem.sentence(5)},
    {name: faker.lorem.sentence(10)},
    {name: faker.lorem.sentence(8)},
    {name: faker.lorem.sentence(5)},
    {name: faker.lorem.sentence(6)},
    {name: faker.lorem.sentence(10)},
    {name: faker.lorem.sentence(5)},

]

// module.exports = {product1, product2, product3, product4}

export default photos;
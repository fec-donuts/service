const faker = require('faker');


// 10 random items with an image, name, rating, and price
const items = [
    {
        image: faker.image.fashion(),
        name: faker.lorem.sentence(6),
        stars: '',
        price: `$${faker.random.number(500)}`
    },
    {
        image: faker.image.nature(),
        name: faker.lorem.sentence(8),
        stars: '',
        price: `$${faker.random.number(500)}`
    },
    {
        image: faker.image.nightlife(),
        name: faker.lorem.sentence(5),
        stars: '',
        price: `$${faker.random.number(500)}`
    },
    {
        image: faker.image.technics(),
        name: faker.lorem.sentence(10),
        stars: '',
        price: `$${faker.random.number(500)}`
    },
    {
        image: faker.image.sports(),
        name: faker.lorem.sentence(8),
        stars: '',
        price: `$${faker.random.number(500)}`
    },
    {
        image: faker.image.transport(),
        name: faker.lorem.sentence(8),
        stars: '',
        price: `$${faker.random.number(500)}`
    },
    {
        image: faker.image.cats(),
        name: faker.lorem.sentence(5),
        stars: '',
        price: `$${faker.random.number(500)}`
    },
    {
        image: faker.image.city(),
        name: faker.lorem.sentence(6),
        stars: '',
        price: `$${faker.random.number(500)}`
    },
    {
        image: faker.image.business(),
        name: faker.lorem.sentence(10),
        stars: '',
        price: `$${faker.random.number(500)}`
    },
    {
        image: faker.image.people(),
        name: faker.lorem.sentence(5),
        stars: '',
        price: `$${faker.random.number(500)}`
    }
]




export default items;
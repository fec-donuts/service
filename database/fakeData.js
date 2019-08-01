const faker = require('faker');
const fs = require('fs');







// let productID = faker.random.alphaNumeric();
// let productBrand = faker.commerce.productName();
// let productPrice = faker.commerce.price();
// let summary = faker.lorem.paragraph();

const dataGenerator = () => {

    for (let i = 0; i <= 100; i++){
        fs.appendFileSync( './data.csv', 
        '"' + faker.random.uuid() + '","' +
        '"' + faker.commerce.productName() + '","' +
        '"' + '$' + faker.commerce.price(100, 600, 2) + '","' + 
        '"' + faker.lorem.paragraph() + '\n');
    };
};

dataGenerator();

module.exports = { dataGenerator }
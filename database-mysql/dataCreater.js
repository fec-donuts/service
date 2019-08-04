const faker = require ('faker');
const fs = require('fs')

const generateData = () => {

    for(let i = 0; i <= 100; i++) {
        fs.appendFileSync('./data.csv',
        '"' + faker.internet.userName() + '","' +
        '"' + faker.commerce.productName() + '","' +
        '"' + faker.commerce.product() + '","' +
        '"' + faker.random.number() + '","' +
        '"' + faker.lorem.paragraphs() + '\n'
        );
    }
}

generateData();
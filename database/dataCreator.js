//import React from 'react';
//import faker from 'faker.js';
//const faker = require('faker');
const fs = require('fs')

// let firstName = faker.name.firstName();
// let animal = faker.image.cats();
// let food = faker.image.food();
// let avatar = faker.image.avatar();
// let people = faker.image.people();
// let sports = faker.image.sports();
// let transport = faker.image.transport();

//const generateData = () => {
 
 //let data = []
 

//  for (let i = 1; i <= 101; i++){
//      fs.appendFileSync('./data.csv',
//           i                        + ','  +
//      '"' + faker.name.firstName()  + '",' +  
//      '"' + faker.image.cats()      + '",' +
//      '"' + faker.image.food()      + '",' +
//      '"' + faker.image.avatar()    + '",' +
//      '"' + faker.image.people()    + '",' + 
//      '"' + faker.image.sports()    + '",' +
//      '"' + faker.image.transport() + '"'   + '\n'     
//      );   
//  }

const photos = {

    1: 'https://shopazon.s3.us-east-2.amazonaws.com/adidas_blue.png',
    2: 'https://shopazon.s3.us-east-2.amazonaws.com/alpina_green.png',
    3: 'https://shopazon.s3.us-east-2.amazonaws.com/basketball_black.jpg',
    4: 'https://shopazon.s3.us-east-2.amazonaws.com/boot_brown.png',
    5: 'https://shopazon.s3.us-east-2.amazonaws.com/converse_green.png',
    6: 'https://shopazon.s3.us-east-2.amazonaws.com/converse_red.jpg',
    7: 'https://shopazon.s3.us-east-2.amazonaws.com/crazy_shoe.png',
    8: 'https://shopazon.s3.us-east-2.amazonaws.com/crocs_black.jpg',
    9: 'https://shopazon.s3.us-east-2.amazonaws.com/crocs_red.jpg',
    10: 'https://shopazon.s3.us-east-2.amazonaws.com/dress_brown.jpg',
    11: 'https://shopazon.s3.us-east-2.amazonaws.com/fj_white.png',
    12: 'https://shopazon.s3.us-east-2.amazonaws.com/football_blue.png',
    13: 'https://shopazon.s3.us-east-2.amazonaws.com/football_purple.jpg',
    14: 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_boots.png',
    15: 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_brown.jpg',
    16: 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_sneaker.png',
    17: 'https://shopazon.s3.us-east-2.amazonaws.com/hiker_boot_black.png',
    18: 'https://shopazon.s3.us-east-2.amazonaws.com/jesus_sandal.jpg',
    19: 'https://shopazon.s3.us-east-2.amazonaws.com/merrell_brown.png',
    20: 'https://shopazon.s3.us-east-2.amazonaws.com/nike_grey.png',
    21: 'https://shopazon.s3.us-east-2.amazonaws.com/rain_brown.png',
    22: 'https://shopazon.s3.us-east-2.amazonaws.com/slippers_dog.png',
    23: 'https://shopazon.s3.us-east-2.amazonaws.com/slippers_poop.png',
    24: 'https://shopazon.s3.us-east-2.amazonaws.com/springblade_runners.png',
    25: 'https://shopazon.s3.us-east-2.amazonaws.com/track_black.jpg',
    26: 'https://shopazon.s3.us-east-2.amazonaws.com/vans_grey.jpg',
    27: 'https://shopazon.s3.us-east-2.amazonaws.com/adidas_blue.png',
    28: 'https://shopazon.s3.us-east-2.amazonaws.com/alpina_green.png',
    29: 'https://shopazon.s3.us-east-2.amazonaws.com/basketball_black.jpg',
    30: 'https://shopazon.s3.us-east-2.amazonaws.com/boot_brown.png',
    31: 'https://shopazon.s3.us-east-2.amazonaws.com/converse_green.png',
    32: 'https://shopazon.s3.us-east-2.amazonaws.com/converse_red.jpg',
    33: 'https://shopazon.s3.us-east-2.amazonaws.com/crazy_shoe.png',
    34: 'https://shopazon.s3.us-east-2.amazonaws.com/crocs_black.jpg',
    35: 'https://shopazon.s3.us-east-2.amazonaws.com/crocs_red.jpg',
    36: 'https://shopazon.s3.us-east-2.amazonaws.com/dress_brown.jpg',
    37: 'https://shopazon.s3.us-east-2.amazonaws.com/fj_white.png',
    38: 'https://shopazon.s3.us-east-2.amazonaws.com/football_blue.png',
    39: 'https://shopazon.s3.us-east-2.amazonaws.com/football_purple.jpg',
    40: 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_boots.png',
    41: 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_brown.jpg',
    42: 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_sneaker.png',
    43: 'https://shopazon.s3.us-east-2.amazonaws.com/hiker_boot_black.png',
    44: 'https://shopazon.s3.us-east-2.amazonaws.com/jesus_sandal.jpg',
    45: 'https://shopazon.s3.us-east-2.amazonaws.com/merrell_brown.png',
    46: 'https://shopazon.s3.us-east-2.amazonaws.com/nike_grey.png',
    47: 'https://shopazon.s3.us-east-2.amazonaws.com/rain_brown.png',
    48: 'https://shopazon.s3.us-east-2.amazonaws.com/slippers_dog.png',
    49: 'https://shopazon.s3.us-east-2.amazonaws.com/slippers_poop.png',
    50: 'https://shopazon.s3.us-east-2.amazonaws.com/springblade_runners.png',
    51: 'https://shopazon.s3.us-east-2.amazonaws.com/track_black.jpg',
    52: 'https://shopazon.s3.us-east-2.amazonaws.com/vans_grey.jpg',
    53: 'https://shopazon.s3.us-east-2.amazonaws.com/adidas_blue.png',
    54: 'https://shopazon.s3.us-east-2.amazonaws.com/alpina_green.png',
    55: 'https://shopazon.s3.us-east-2.amazonaws.com/basketball_black.jpg',
    56: 'https://shopazon.s3.us-east-2.amazonaws.com/boot_brown.png',
    57: 'https://shopazon.s3.us-east-2.amazonaws.com/converse_green.png',
    58: 'https://shopazon.s3.us-east-2.amazonaws.com/converse_red.jpg',
    59: 'https://shopazon.s3.us-east-2.amazonaws.com/crazy_shoe.png',
    60: 'https://shopazon.s3.us-east-2.amazonaws.com/crocs_black.jpg',
    61: 'https://shopazon.s3.us-east-2.amazonaws.com/crocs_red.jpg',
    62: 'https://shopazon.s3.us-east-2.amazonaws.com/dress_brown.jpg',
    63: 'https://shopazon.s3.us-east-2.amazonaws.com/fj_white.png',
    64: 'https://shopazon.s3.us-east-2.amazonaws.com/football_blue.png',
    65: 'https://shopazon.s3.us-east-2.amazonaws.com/football_purple.jpg',
    66: 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_boots.png',
    67: 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_brown.jpg',
    68: 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_sneaker.png',
    69: 'https://shopazon.s3.us-east-2.amazonaws.com/hiker_boot_black.png',
    70: 'https://shopazon.s3.us-east-2.amazonaws.com/jesus_sandal.jpg',
    71: 'https://shopazon.s3.us-east-2.amazonaws.com/merrell_brown.png',
    72: 'https://shopazon.s3.us-east-2.amazonaws.com/nike_grey.png',
    73: 'https://shopazon.s3.us-east-2.amazonaws.com/rain_brown.png',
    74: 'https://shopazon.s3.us-east-2.amazonaws.com/slippers_dog.png',
    75: 'https://shopazon.s3.us-east-2.amazonaws.com/slippers_poop.png',
    76: 'https://shopazon.s3.us-east-2.amazonaws.com/springblade_runners.png',
    77: 'https://shopazon.s3.us-east-2.amazonaws.com/track_black.jpg',
    78: 'https://shopazon.s3.us-east-2.amazonaws.com/vans_grey.jpg',
    79: 'https://shopazon.s3.us-east-2.amazonaws.com/adidas_blue.png',
    80: 'https://shopazon.s3.us-east-2.amazonaws.com/alpina_green.png',
    81: 'https://shopazon.s3.us-east-2.amazonaws.com/basketball_black.jpg',
    82: 'https://shopazon.s3.us-east-2.amazonaws.com/boot_brown.png',
    83: 'https://shopazon.s3.us-east-2.amazonaws.com/converse_green.png',
    84: 'https://shopazon.s3.us-east-2.amazonaws.com/converse_red.jpg',
    85: 'https://shopazon.s3.us-east-2.amazonaws.com/crazy_shoe.png',
    86: 'https://shopazon.s3.us-east-2.amazonaws.com/crocs_black.jpg',
    87: 'https://shopazon.s3.us-east-2.amazonaws.com/crocs_red.jpg',
    88: 'https://shopazon.s3.us-east-2.amazonaws.com/dress_brown.jpg',
    89: 'https://shopazon.s3.us-east-2.amazonaws.com/fj_white.png',
    90: 'https://shopazon.s3.us-east-2.amazonaws.com/football_blue.png',
    91: 'https://shopazon.s3.us-east-2.amazonaws.com/football_purple.jpg',
    92: 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_boots.png',
    93: 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_brown.jpg',
    94: 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_sneaker.png',
    95: 'https://shopazon.s3.us-east-2.amazonaws.com/hiker_boot_black.png',
    96: 'https://shopazon.s3.us-east-2.amazonaws.com/jesus_sandal.jpg',
    97: 'https://shopazon.s3.us-east-2.amazonaws.com/merrell_brown.png',
    98: 'https://shopazon.s3.us-east-2.amazonaws.com/nike_grey.png',
    99: 'https://shopazon.s3.us-east-2.amazonaws.com/rain_brown.png',
    100: 'https://shopazon.s3.us-east-2.amazonaws.com/slippers_dog.png',
    101: 'https://shopazon.s3.us-east-2.amazonaws.com/slippers_poop.png',
    102: 'https://shopazon.s3.us-east-2.amazonaws.com/springblade_runners.png',
    103: 'https://shopazon.s3.us-east-2.amazonaws.com/track_black.jpg',
    104: 'https://shopazon.s3.us-east-2.amazonaws.com/vans_grey.jpg'

}

//generateData();

// console.log(`Name: ${firstName}`);
// console.log(`Pet: ${animal}`);
// console.log(`Food: ${food}`);
// console.log(`Ava: ${avatar}`);
// console.log(`Peeps: ${people}`);
// console.log(`Good at: ${sports}`);
// console.log(`I drive: ${transport}`);

module.exports = { photos }
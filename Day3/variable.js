const PI = 3.14
let radius = 100          // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC


// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m/s2.`
)

// Ternary operators
let isRaining = true;
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.');

isRaining = false;
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.');

  let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)

  number = -5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)

//   Window operators
//   alert('Welcome to 30 Days Of JavaScript');

//   let promp = prompt('Enter number', 'number goes here');
// console.log(promp);

// const agree = confirm('Are you sure you like to delete? ');
// console.log(agree); // result will be true or false based on what you click on the dialog box

const now = new Date();
console.log(now); 
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getMilliseconds());
console.log(now.getHours());
console.log(now.getTime());

const allSeconds = Date.now(); //
console.log(allSeconds); // this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime();
console.log(timeInSeconds);
console.log(allSeconds == timeInSeconds); // true
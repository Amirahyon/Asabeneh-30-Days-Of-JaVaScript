// Conditionals
// if (condition) {

// }
let num = 3;
if (num > 0) {
  console.log(`${num} is a positive number`);
}

let isRaining = true;
if (isRaining) {
  console.log('Remember to take your rain coat.');
}

// if (condition) {

// } else {

// }
let number = -3;
if (number > 0) {
  console.log(`${number} is a positive number`);
} else {
  console.log(`${number} is a negative number`);
}

isRaining = false;
if (isRaining) {
  console.log('You need a rain coat.');
} else {
  console.log('No need for a rain coat.');
}


// if (condition) {
    
// } else if (condition) {
  
// } else {

// }
let a = 0;
if (a > 0) {
  console.log(`${a} is a positive number`);
} else if (a < 0) {
  console.log(`${a} is a negative number`);
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`);
}

let weather = 'sunny';
if (weather === 'rainy') {
  console.log('You need a rain coat.');
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.');
} else if (weather === 'sunny') {
  console.log('Go out freely.');
} else {
  console.log('No need for rain coat.');
}

// switch(caseValue){
//     case 1:
//       break
//     case 2:
//      break
//     case 3:
//      break
//     default:
//   }
let weathers = 'cloudy';
switch (weathers) {
  case 'rainy':
    console.log('You need a rain coat.');
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.');
    break
  case 'sunny':
    console.log('Go out freely.');
    break
  default:
    console.log(' No need for rain coat.');
}
// Switch More Examples
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}

// Ternary operators
let israining = true;
israining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.');

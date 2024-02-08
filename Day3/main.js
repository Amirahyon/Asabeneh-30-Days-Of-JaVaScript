// Level 1
let firstName = "Amirah";
let lastName = 'Abdullahi';
let country = "Nigeria";
let city = "Ilorin";
let age = 21;
let isMarried = false;
let year = 2024;
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMarried);

console.log('10' === 10);
console.log(parseFloat('9.8') == 10);


console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log('python'.length != 'jargon'.length);

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!(('dragon'.includes("on")) && ('python'.includes("on"))));

let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getDay() + 1);
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime());

// Level 2
const a = prompt("Enter base of a triangle");
const b = prompt("Enter height of a triangle");
const area = 0.5 * a * b;
console.log(area);

const e = prompt("Enter side 'e' of the triangle");
const f = prompt("Enter side 'f' of the triangle");
const g = prompt("Enter side 'g' of the triangle");
const perimeter = +e + +f + +g;
console.log(perimeter);

const lenght = prompt("Enter length");
const width = prompt("Enter width");
const areaOfTriangle = length * width;
console.log(areaOfTriangle);

const perimeterOfATriangle = 2 * (Number(length) + Number(width));
console.log(perimeterOfATriangle);

const radius = prompt("Enter radius");
const PI = Math.PI
areaOfCircle = PI * radius * radius;
console.log(areaOfCircle);

circumference = 2 * PI * radius;
console.log(circumference);

let y2 = 2;
let y1 = 2;
let x1 = 6;
let x2 = 10;
let m = ((y2-y1)/(x2-x1));
console.log(m);

let x = 1;
let y = (x ** 2) + (6 * x) + 9;
console.log(y);

const hours = prompt("Enter hours");
const ratePerHour = prompt("Enter rate");
const pay = ratePerHour * hours;
console.log(pay);

let name = "Amirah";
name.length > 7
? console.log("Amirah"):
 console.log("Your name is short");


 let firstname = "Amirah";
 let lastname = "Abdullahi";
 console.log('Your first name,', `${firstname}`, 'is shorter than your last name,', `${lastname}`);

 let myAge = 21;
 let yourAge = 50;
 console.log('I am', `${yourAge - myAge}`, 'younger than you.');

 let birthYear = prompt("Enter your birth year");
 let remainingYears = 18 - birthYear;
 birthYear >= 18
 ? console.log("You are allowed to drive"):
  console.log("You have", `${remainingYears}`, "left to drive");

let numberOfYears = prompt("Enter number of years youve lived");


// Level 3
console.log(date);
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDay() + 1;
hour = date.getHours();
min = date.getMinutes();
console.log(`${year}`,'-',`${month}`,'-',`${day}`, `${hour}`,':',`${min}`);
console.log(`${day}`,'-',`${month}`,'-',`${year}`, `${hour}`,':',`${min}`);
console.log(`${year}`,'/',`${month}`,'/',`${day}`, `${hour}`,':',`${min}`);


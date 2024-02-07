let challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(3));
console.log(challenge.substring(0, 2));
console.log(challenge.includes("Script"));

let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(string.split(" "));

console.log(challenge.replace("JavaScript", "Python"));

console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf("because"));
console.log(sentence.lastIndexOf("because"));
console.log(sentence.search("because"));

let index = ' 30 Days Of JavaScript ';
console.log(index.trim(''));

console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("Script"));

console.log(challenge.match("a"));
let pattern = /a/g;
console.log(challenge.match(pattern));
console.log("30 Days of" + " " + "JavaScript");
console.log(challenge.repeat(2));

// Level 2
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');

console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"');

let num = '10';
console.log(typeof num);
console.log(typeof num == 10);
let number = parseInt(num);
console.log(number);
console.log(typeof number);
console.log(typeof number == 10);

let numBer = '9.8';
let nuMber = parseFloat('9.8');
console.log(nuMber);
console.log(Math.round(nuMber));

let jargon = 'I hope this course is not full of jargon.';
console.log(jargon.includes("jargon"));
let python = "python";
console.log(python.includes("on"));

random = Math.random()
randomNum = random * 100;
console.log(randomNum);
randoMnum = (random + 50);
console.log(randoMnum);

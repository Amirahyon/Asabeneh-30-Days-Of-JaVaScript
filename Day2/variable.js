// Accessing Character
let string = "JavaScript";
let firstLetter = string[0];
console.log(firstLetter);
let secondLetter = string[1];
console.log(secondLetter);
let lastLetter = string[string.length - 1];
console.log(lastLetter);
let lastIndex = string.length - 1;
console.log(lastIndex);
console.log(string[lastIndex]);

// charAt()
// string.charAt(index)
let index = "30 Days Of JavaScript";
console.log(index.charAt(5));
let laStindex = index.length - 1;
console.log(index[laStindex]);

// charCodeAt()
// string.charCodeAt(index)
console.log(index.charCodeAt(3));
let lastinDex = index.length - 1;
console.log(index.charCodeAt(lastinDex));

// concat()
// string.concat(substring, substring, substring)
let indeX = "";
console.log(indeX.concat(`${string}- ${index}`));
let strIng = "30";
console.log(strIng.concat("Days", "Of", "Javascript"));
console.log(strIng.concat(" ", "Days", " ", "Of", " ", "Javascript"));

// endsWith() // startsWith
// string.endsWith(substring)
console.log(index.endsWith("Javascript"));
console.log(index.endsWith("Of Javascript"));
console.log(index.startsWith("30 days"));

// includes()
// string.includes(substring)
console.log(index.includes("Days"));

// indexOf()
// string.indexOf()
console.log(index.indexOf("J"));

// lastIndexOf()
// string.lastIndexOf()
console.log(index.lastIndexOf("D"));

// match()
// string.match()
let stRing = "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(stRing.match("love"));
let pattern = /love/gi;
console.log(stRing.match(pattern));
// regEx
// string.match(regEx)
regEx = /\d+/g;
console.log(index.match(regEx));
x = /\d/g;
console.log(index.match(x));

// repeat()
// string.repeat(n) // n = number of times
console.log(string.repeat(3));

// replace()
// string.replace(oldsubstring, newsubstring)
let iNdex = "30 Days Of Javascript";
console.log(iNdex.replace("Javascript","Python"));

// search()
// string.search(substring)
console.log(iNdex.search("f"));
console.log(iNdex.search("Days"));

// split()
// string.split("")
console.log(string.split(""));
console.log(string.split(" "));
console.log(iNdex.split(""));
console.log(iNdex.split(" "));
console.log(iNdex.split("  "));

// substr()
// string.substr(x, y) //x = index no, y = how many letters to slice
console.log(string.substr(4,4));
console.log(string.substr(4,2));

// substring()
// string.substring(x, z) //z = stopping index
console.log(string.substring(4, 7));

// toLowerCase()
// string.toLowerCase()
console.log(string.toLowerCase());

// toUpperCase()
// string.toUpperCase()
console.log(string.toUpperCase());

// trim()
// string.trim()
let striNg = "    Javascript";
console.log(striNg.trim(""));

console.log(Math.E);
console.log(Math.LN10);
console.log(Math.tan(60));
let randomNum = Math.random();
let num = randomNum * 50;
console.log(num);
let numR = Math.floor(num);
console.log(numR);
console.log(Math.ceil(num));
console.log(Math.round(num));

// concatenation
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';
let fullName = firstName + " " + lastName;
// let fullName = "Asabeneh" + " " + "Yetayah";
console.log(fullName);

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph);

console.log('Day\'s\nTopics\t\"Exercises\"\\')

console.log(`The sum of 2 and 3 is 5`);
let a = 2;
let b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}`);
console.log(`${a} is greater than ${b}: ${a > b}`)


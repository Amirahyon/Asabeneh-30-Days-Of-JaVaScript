// Level 1
let arr = [];
console.log(arr);

let array = ['Amirah', 'Azeezah', 'Hakeemat', 'Halimat', 'Khadija', 'Zainab', 'Hanifa'];
console.log(array);
console.log(array.length);
console.log(array[0]);
console.log(array[3]);
console.log(array[array.length - 1]);

const mixedDataTypes = [1, 3, 'Amirah', 40, 'Salami', 'Orange', 89];
console.log(mixedDataTypes);
console.log(mixedDataTypes.length);

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[itCompanies.length - 1]);
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
console.log(itCompanies.toString());

if (itCompanies.includes('IBM')) {
    console.log("It exists");
} else {
    console.log("It does not exist");
}


// console.log(itCompanies.splice(3, 6));
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(4, 6));
console.log(itCompanies.slice(3, 4));
itCompanies.shift();
console.log(itCompanies);
itCompanies.splice(3, 1);
console.log(itCompanies);
itCompanies.pop();
console.log(itCompanies);
console.log(itCompanies.splice());


// Level 2
import { countries } from "./countries.js";
console.log(countries);
console.log(countries.slice(5,6));
console.log(countries.slice(0, 10));


import { webTechs } from "./web_tech.js";

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = /['.,]/gi;
let word = text.replace(words, "");
console.log(word);
let wordss = word.split(" ");
console.log(wordss);
console.log(wordss.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart);
shoppingCart[3]  = "Green tea";
console.log(shoppingCart);

if(countries.includes("Ethiopia")) {
    console.log("ETHIOPIA");
} else {
    console.log(countries.push("Ethiopia"));
}

if (webTechs.includes("Sass")) {
    console.log("Sass is a CSS preprocess");
} else {
    console.log("It does not exist");
}

webTechs.push("Sass");
console.log(webTechs);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = [frontEnd, backEnd];
console.log(fullStack);

// Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());
 let medianAge = ((ages[4] + ages[5]) / 2);
 console.log(medianAge);

 let allAge = ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9];
 console.log(allAge);
 let averageAge = allAge / ages.length;
 console.log(averageAge);

 let rangeAge = ages[9] - ages[0];
 console.log(rangeAge);
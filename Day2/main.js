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
randoMnum = Math.random() * 50 + 50;
console.log(randoMnum);

randomNumBtwn = random * 255;
console.log(randomNumBtwn);

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125 ");

console.log(sentence.indexOf("because"));
console.log(sentence.lastIndexOf("because"));
console.log(sentence.substr(31, 23));


// Level 3
let l = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
love = /love/gi;
console.log(l.match(love));

because = /because/gi;
console.log(sentence.match(because));

const sentenc = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let inequalities = /[%@&$#;]/gi;
console.log(sentenc.replace(inequalities, ""));

const annualIncome = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let income = /\d+/gi;
console.log(annualIncome.match(income));
let a = annualIncome.match(income);
let a1 = Number(a[0] * 12);
let a2 = Number(a[1]);
let a3 = Number(a[2] * 12);
console.log(a1 + a2 + a3);
console.log(+(a[0] * 12) + +(a[1]) + +(a[2] * 12));
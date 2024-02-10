const arr = Array(6).fill("hey");
console.log(arr);
const array = new Array(8)

console.log(array);
const ar = [];
console.log(ar);

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'];// array of strings
let lastFruit = fruits.length - 1;

console.log('Numbers:', numbers);
console.log('Number of numbers:', numbers.length);
console.log(numbers[3]);

console.log('Fruits:', fruits);
console.log('Number of fruits:', fruits.length);
console.log(fruits[0]);
console.log(fruits[lastFruit]);
fruits[1] = "strawberry"
console.log(fruits);

const arra = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
];
console.log(arra);

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList);

// let us check if a banana exist in the array
let index = fruits.indexOf('banana');
if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}

index === -1 
? console.log('This fruit does not exist in the array')
: console.log('This fruit does exist in the array')

// let us check if an avocado exist in the array
let indexOfAvocado = fruits.indexOf('avocado');
if(indexOfAvocado === -1) {
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}

console.log(Array.isArray(fruits));
console.log(fruits.toString());

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.join());
console.log(names.join(''));
console.log(names.join(' '));
console.log(names.join(', '));
console.log(names.join(' # '));


console.log(numbers.slice());
console.log(numbers.slice(0));
console.log(numbers.slice(0, numbers.length));
console.log(numbers.slice(1,4));

console.log(numbers.splice());
console.log(numbers.splice(0,1));
console.log(numbers.splice(3, 3, 7, 8, 9));

// Push
console.log(Array.isArray(fruits));
console.log(fruits);

fruits.push('avocado');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.reverse();
console.log(fruits);
fruits.sort();
console.log(fruits);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
 const backEnd = ['Node','Express', 'MongoDB'];
 const fullStack = [frontEnd, backEnd];
 console.log(fullStack);
 console.log(fullStack.length);
 console.log(fullStack[0]);
 console.log(fullStack[1]);

 
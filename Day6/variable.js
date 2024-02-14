// Loop
// For loop
for(let i = 0; i <= 5; i++){
    console.log(i);
  };

  for(let i = 5; i >= 0; i--){
    console.log(i);
  };

  for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`);
  };

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
const newArr = [];
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase());
//   console.log(newArr);
}
console.log(newArr);

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i];
//   console.log(sum);
}

console.log(sum); // only prints the last result

 let newArray = [];
 for (i = 0; i < numbers.length; i++){
    newArray.push(numbers[i] ** 2);
    // console.log(newArray);
 }
console.log(newArray);


// While loop
let x = 0;
while (x <= 5) {
  console.log(x);
  x++;
};

// Do while loop
let v = 0;
do {
  console.log(v);
  v++;
} while (v <= 5)


for (const num of numbers) {
    console.log(num);
  }

for (const num of numbers) {
    console.log(num * num);
  }

let sumx = 0;
for (const num of numbers) {
    sumx = sumx + num;
  }
console.log(sumx);
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];
  
for (const tech of webTechs) {
    console.log(tech.toUpperCase());
}

for (const tech of webTechs) {
    console.log(tech[0]);
}

// Break
for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i);
}

for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
  }
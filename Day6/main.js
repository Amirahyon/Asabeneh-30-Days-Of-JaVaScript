// Level 1
for (i = 0; i <= 10; i++) {
    console.log(i);
}
let a = 0;
while (a <= 10) {
    console.log(a);
    a++;
}

let b = 0;
do {
    console.log(b);
    b++;
} while(b <= 10)


for (x = 10; x >= 0; x--) {
    console.log(x);
}

let y = 10;
while (y >= 0) {
    console.log(y);
    y--;
}

let z = 10;
do {
    console.log(z);
    z--;
} while(z >= 0)


for (c = 0; c <= 6; c++) {
    console.log(c);
}

const num = '#';
let sum = '';
for (i = 0; i <= 7; i++) {
    sum += num
    console.log(sum);
}

for(a = 0; a <= 10; a++) {
    console.log(`${a} * ${a} = ${a * a}`);
}


for (a = 0; a <= 10; a++) {
    console.log(`${a}  ${a ** 2}  ${a ** 3}`);
}

// Level 2
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
let newArr = [];
for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase());
}
console.log(newArr);

let newArray = [];
for(i= 0; i < countries.length; i++) {
    newArray.push(countries[i].length);
}
console.log(newArray);

let array = [];
let arrAy = [];
for (const count of countries){
    // let d = count;
    // let e = count.slice(0, 3);
    // let e1 = e.toUpperCase();
    // let f = count.length;
    // console.log(`["${d}", "${e1}", "${f}"`);
    array.push([count, (count.slice(0, 3)).toUpperCase(), count.length]);
    arrAy.push(count.includes('land'))
}
console.log(array);
console.log(arrAy);

for (let l = 0; l <= 100; l++) {
    let m = l % 2;
    if (m == 1) {
        continue
    }
    console.log(l);
}

for (let g = 0; g <= 100; g++) {
    let h = g % 2;
    if (h == 0) {
        continue
    }
    console.log(g);
}


let rando = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
console.log(rando);

let ran = Math.random() * 255;
let rand = Math.random() * 255;
let ra = Math.random() * 255;
console.log(`rgb(${Math.round(ran)},${Math.round(rand)},${Math.round(ra)})`);


let newCount = [];
for (let count of countries) {
    newCount.push(count.toUpperCase())
}
console.log(newCount);

let newCou = [];
for (o = 0; o < countries.length; o++) {
    newCou.push(countries[o].length)
}
console.log(newCou);


for (const s of countries) {
    console.log(s.slice(0,3));
}

let newCo = [];
for (const v of countries) {
    let q = v.slice(0, 3);
    let t = v.length;
    let u = [];
    u.push(v, q.toUpperCase(), t);
    newCo.push(u)
}
console.log(newCo);

for (const land of countries) {
    if (land.includes('land') == false) {
        continue
    }
    console.log(land);
}

for (const la of countries) {
    if (la.includes('land') == true){
        continue
    }
    console.log(la);
}

for (const ia of countries) {
    if (ia.includes('ia') == false) {
        continue
    }
    console.log(ia);
}

for (const length of countries) {
    if (length.length == 5) {
        console.log(length);
    }
}

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];

//   for (const tech of webTechs) {
//     let sum = "";
//     // console.log(sum);
//     if(tech.length > sum.length){
        
//         break
//     }
//     console.log(tech);
//   }



let newIndex = [];
for (const index of webTechs) {
    let newTech = [];
    let inD = index.length;
    newTech.push(index.toUpperCase(), inD);
    // console.log(newTech);
    newIndex.push(newTech);
}
console.log(newIndex);

  const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

  let newMern = [];
  for (const mern of mernStack) {
    let me = mern.slice(0, 1);
    console.log(me);
    newMern.push(me);
}
console.log(newMern);

let merged = webTechs + mernStack;
// let merge = merged.split(' ');
let merge = [];
merge.push(merged)
console.log(merge);

for (const merg of merge) {
    console.log(merg);
}

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ];
  for (const full of fullStack) {
    console.log(full);
  }

//   Level 3
sortedCountries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

console.log(webTechs.sort());
console.log(mernStack.sort());

for (count of sortedCountries) {
    newArray = [];
    if (count.includes('land') == false){
        continue
    }
    newArray.push(count)
    console.log(newArray);
}

let sorts = [];
for (const index of countries) {
    if (index.length < 2) {
        continue
    }
    sorts.push(index)
}
console.log(sorts);

let sorte = [];
for (const sorted of sortedCountries) {
    if (sorted.length != 4){
        continue
    }
    sorte.push(sorted);
}
console.log(sorte);

let sort = sortedCountries.reverse()
console.log(sort);
let newA = [];
for(sort of sortedCountries) {
    let so = sort.toUpperCase();
    newA.push(so);
}
console.log(newA);
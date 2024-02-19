// Level 1
// 1
function printFullName() {
    console.log("Abdullahi" + " " + "Amirah");
}
printFullName()

// 2
function fullName() {
    firstName = "Amirah";
    lastName = "Abdullahi";
    let fullNam = firstName + " " + lastName;
    return fullNam
}
console.log(fullName());

// 3
function addNumbers(numOne, numTwo) {
    return numOne + numTwo
}
console.log(addNumbers(20, 55));

// 4
function areaOfRectangle(length, width){
    let area = length * width
    return area
}
console.log(areaOfRectangle(10, 7));

// 5
function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter
}
console.log(perimeterOfRectangle(10, 7));

// 6
function volumeOfRecPrism(l, w, h) {
    let volume = l * w * h;
    return volume
}
console.log(volumeOfRecPrism(10, 7, 5));

// 7
const areaOfCircle = r => Math.PI * r * r;
console.log(areaOfCircle(9));

// 8
const circumOfCircle = r => 2 * Math.PI * r;
console.log(circumOfCircle(10));

// 9
function density(mass, volume) {
    let dense = mass / volume;
    return dense
}
console.log(density(50, 20));

// 10
function speed(distance, time) {
    let s = distance / time;
    return s
}
console.log(speed(50, 10));

// 11
function weightOfSubstance(mass, gravity = 9.81) {
    let weight = mass * gravity
    console.log(weight);
}
weightOfSubstance(10)

// 12
function convertCelsiusToFahrenheit(oC) {
    let oF = (oC * 9/5) + 32
    return oF
}
console.log(convertCelsiusToFahrenheit(100));

// 13
function bMI(w, h) {
    let bmi = w / (h * h);
    console.log(bmi);
    if (bmi < 18.5) {
        return 'Underweight'
    } else if (bmi <= 24.9) {
        return 'Normal Weight'
    } else if (bmi <= 29.9) {
        return 'Overweight'
    } else {
        return 'Obese'
    }
}
console.log(bMI(63, 1.63));

// 14
function checkSeason() {

}

// 15
const findMax = (...args) => {
    for (const index of args) {
        if (index > args.length) {
            return index
        }
    }
}
console.log(findMax(0, 10, 5));


// Level 2
// 1
function solveLinEquation(a, b, c){
    linEquation = (`((${a} * x) + (${b} * y) + ${c}) = 0`);
    return linEquation
}
console.log(solveLinEquation(1, 4, 4));
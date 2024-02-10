// let age = prompt("Enter your age");
// if (age >= 18) {
//     console.log("You are old enough to drive");
// } else {
//     let feedback = 18 - age;
//     console.log(`You have ${feedback} years left to drive`);
// }

// let myAge = 21;
// let yourAge = prompt("Enter your age");
// if (yourAge > myAge) {
//     console.log("You are older than me");
// } else {
//     console.log("I am older than you");
// }

// let a = 3;
// let b = 5;
// if (a > b) {
//     console.log("a is greater than be");
// } else {
//     console.log("a is less than b");
// }

// (a > b)
// ? console.log("a is greater than be")
// : console.log("a is less than b");

// let x = prompt("Enter a number");
// let y = x % 2;
// if (y == 0) {
//     console.log("x is an even number");
// } else {
//     console.log("x is not an even number");
// }

// // Level 2
let score = prompt("Enter your score");
let grade = +score;
switch (grade) {
    case 'grade <= 100':
        console.log("A")
        break
    case 'grade <= 79':
        console.log("B")
        break
    case 'grade <= 69':
        console.log("C")
        break
    case 'grade <= 59':
        console.log("D")
        break
    case 'grade <= 49':
        console.log("F")
        break
    default :
        console.log("No grade");
}

let season = prompt("Enter months");
let months = season.toLowerCase();
switch (months) {
    case 'september':
        console.log("Autumn")
        break
    case 'october':
        console.log("Autumn")
        break
    case 'november':
        console.log("Autumn")
        break
    case 'december':
        console.log("Winter")
        break
    case 'january':
        console.log("Winter")
        break
    case 'february':
        console.log("Winter")
        break
    case 'march':
        console.log("Spring")
        break
    case 'april':
        console.log("Spring")
        break
    case 'may':
        console.log("Spring")
        break
    case 'june':
        console.log("Summer")
        break
    case 'july':
        console.log("Summer")
        break
    case 'august':
        console.log("Summer")
        break
    default:
        console.log("None");
}

let inputDay = prompt("Enter day");
let day = inputDay.toLowerCase();
switch (day) {
    case 'monday':
        console.log("It is a working day")
        break;
    case 'tuesday':
        console.log("It is a working day")
        break
    case 'wednesday':
        console.log("It is a working day")
        break
    case 'thursday':
        console.log("It is a working day")
        break
    case 'friday':
        console.log("It is a working day")
        break
    default:
        console.log("It is a weekend")
}

// Level 3
let inputMonth = prompt("Enter the month");
let month = inputMonth.toLowerCase();
switch (month) {
    case 'january':
        console.log('January has 31 days');
        break;
    case 'february':
        console.log('February has 28 days');
        break;
    case 'march':
        console.log('March has 31 days');
        break;
    case 'april':
        console.log('April has 30 days');
        break;
    case 'may':
        console.log('May has 31 days');
        break;
    case 'june':
        console.log('June has 30 days');
        break;
    case 'july':
        console.log('July has 31 days');
        break;
    case 'august':
        console.log('August has 31 days');
        break;
    case 'september':
        console.log('September has 30 days');
        break;
    case 'october':
        console.log('October has 31 days');
        break;
    case 'november':
        console.log('November has 30 days');
        break;
    case 'december':
        console.log('December has 31 days');
        break;
    default:
        console.log('It is not a month');
}

let leapYear = prompt("Enter month");
let leapYearMonth = leapYear.toLowerCase();
switch (leapYearMonth) {
    case 'january':
        console.log('January has 31 days');
        break;
    case 'february':
        console.log('February has 29 days');
        break;
    case 'march':
        console.log('March has 31 days');
        break;
    case 'april':
        console.log('April has 30 days');
        break;
    case 'may':
        console.log('May has 31 days');
        break;
    case 'june':
        console.log('June has 30 days');
        break;
    case 'july':
        console.log('July has 31 days');
        break;
    case 'august':
        console.log('August has 31 days');
        break;
    case 'september':
        console.log('September has 30 days');
        break;
    case 'october':
        console.log('October has 31 days');
        break;
    case 'november':
        console.log('November has 30 days');
        break;
    case 'december':
        console.log('December has 31 days');
        break;
    default:
        console.log('It is not a month');
}
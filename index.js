var x = 10; // variable

let y = 5; // variable

const z = 7; // variable nu se poate schimba valoarea 

/*
multiple 
line 
comment

*/

// DATA TYPES 

// ===================== PRIMITIVE DATA TYPES ==========================
// STRING
let myString = "Hello World"; // string
let myString2 = 'Hello World1234'; // string
var str = `String` // string cu backticks 

// NUMBER
const num = 100; // number
const num2 = 100.50; // number

// BOOLEAN
let myBoolean = true;
let myBoolean1 = false;


// UNDEFINED 
let myUndefined = undefined; // initialized, no value

//NULL
var myNull = null;

// SYMBOL
let mySymbol = Symbol("mySymbol");

// ===================== NON-PRIMITIVE DATA TYPES ==========================

// OBJECT

let obj = {
    firstName: 'John',   // firstName - key,  ' John' - value
    lastName: 'Doe',    // lastName - key, 'Doe' - value
    age: 30,
}

// ARRAY
let arr = ["string1", "string2", 30, 10, { key1: "blabla", key2: "blabla2" }]


// ACCESAREA VALORILOR din OBJECT SI ARRAY
let sentence = `${obj.firstName} is ${obj.age} years old.`
console.log(sentence);

sentence = `${obj["firstName"]} is ${obj["age"]} years old!`;
console.log(sentence);


let sentence2 = obj.firstName + " is " + obj["age"] + " years old." // STRING CONCATENTATION

console.log("Sentence 2: ", sentence2);

console.log(arr[arr.length - 2])
console.log(arr[1])

// CONDITIONALS
// ============================= IF/ELSE Conditionals ===============================
x = 6;
if (x === 10) {
    console.log("x = 10")
}
else if (x === 5) {
    console.log("x = 5")
}
else {
    console.log("x != 10")
}

// ============================= Switch Statement ====================================

let month = 4;
switch (month) {
    case 1:
        console.log("It is January")
        break;
    case 2:
        console.log("It is February")
        break;
    case 3:
        console.log("It is March")
        break;
    default:
        console.log(month);
}

// ================================ TERNARY OPERATOR ========================================
month = 3;
month === 4 ? console.log("It is April") : console.log("It is May")

// SEMNUL EGAL 
const myVar = 100 // un semn de egal => pentru a initializa o variabila
const myStr = "100"

if (myVar === myStr) {
    console.log(true)
}
else {
    console.log(false)
}


if (myVar == myStr) {
    console.log(true);
} else {
    console.log(false);
}

// MATH OPERATORS

x = 100;
y = 50;
let a = 3;
let sum = x + y;

console.log(sum)

let subtracted = x - y;

console.log(subtracted)

let multiplied = x * y;

console.log(multiplied)

let divided = x / y

console.log(divided)

let pow = x ** a;   // PUTERE

console.log(pow);

let rest = 10 % 3   // MODULO Operator

console.log(rest);

// INCREMENT Operator
x++
console.log(x)

// DECREMENT Operator

y--
console.log(y)

// FUNCTIONS 


function addNums() {
    console.log(sum)            // Regular function
}
addNums()

const subtractNums = () => {
    console.log(subtracted)          // Arrow function
}

subtractNums()

function multiply(parametru1, parametru2) {
    return parametru1 * parametru2;
}

var multiplied2 = multiply(a, y);

console.log(multiplied2)

const doSomething = (param1, param2) => {
    let result = 0;
    if (param1 > 10 && param2 < 5) {      // &&  => and/si
        result = param1 * param2
        console.log("Prima conditie", result)
    }
    else if (param1 === 6 || param2 > 15) {     // ||  => sau/or
        result = param1 + param2
        console.log("A doua conditie", result)
    }
    else {
        console.log("Random string")
    }
}

doSomething(11, 4)

doSomething(5, 16)

doSomething(6, 1)
doSomething(1, 6)


function tellMeTheMonth(param) {
    switch (param) {
        case 1:
            console.log("It is January")
            break;
        case 2:
            console.log("It is February")
            break;
        case 3:
            console.log("It is March")
            break;
        case 4:
            console.log("It is April")
            break;
        case 5:
            console.log("It is May")
            break;
        case 6:
            console.log("It is June")
            break;
        case 7:
            console.log("It is July")
        case 8:
            console.log("It is August")
            break;
        case 9:
            console.log("It is September")
            break;
        case 10:
            console.log("It is October")
            break;
        case 11:
            console.log("It is November")
            break;
        case 12:
            console.log("It is December")
        default:
            console.log("Wrong number");
    }
}

tellMeTheMonth(6);

let obj2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 30,
    gender: "f"
}

let obj3 = {
    firstName: "John",
    lastName: "Doe",
    age: 15,
    gender: "m"
}


let obj4 = {
    firstName: "Human",
    lastName: "Person",
    age: 16,
    gender: "m"
}


let obj5 = {
    firstName: "Human",
    lastName: "Person",
    age: 14,
    gender: "f"
}

function saySomething(object) {
    let result = `Our character's name is ${object.firstName} and ${object.gender === "m" ? "he" : "she"} goes to ${object.age >= 15 ? "work" : "school"}`

    console.log(result)
}

saySomething(obj3);

function divide(num1, num2){
    try {
        if(num2 === 0){
            throw new Error("Cannot divide by zero")
        }
        console.log(num1/num2)
    } catch(error){
        console.log(error)
    }
}

divide(10, 0)

//  SyntaxError:
// let blabla = "awgawgawtg"]


// TypeError:

let blabla = "awgawgawtg"
console.log(blabla.toUpperCase())

blabla = undefined
// console.log(blabla.toUpperCase())

// ReferenceError:
// console.log(variabilaCareNuExista)


// RangeError:
let arr1 = [1,2,3];

console.log(arr1[4])

function sumUpTo(n){
    if(n<1){
        throw new RangeError("n must be a positive number");
    }
    let sum = 0;
    for (let i = 1; i <=n; i++){
        sum +=i;
    }
    console.log(sum);
}

sumUpTo(5)
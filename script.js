// Part 1
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Shrek"));

// Part 2
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(5, 7));

// Part 3
let x = 10;

function changeValue() {
    let x = 20; 
    console.log("Inside function: ", x);
}

console.log("Outside function before calling changeValue: ", x);
changeValue();
console.log("Outside function after calling changeValue: ", x);

// Part 4
function outerFunction() {
    let count = 0;
    return function() {
        count++;
        console.log("Count: ", count);
    }
}

const counter = outerFunction();
counter();
counter();

// The Bonus Challenge
function greetWithDefault(name = "Guest") {
    return "Hello " + name;
}

console.log(greetWithDefault());

function multiplier(factor) {
    return function(number) {
        return number * factor;
    }
}

const double = multiplier(2);
console.log(double(5));

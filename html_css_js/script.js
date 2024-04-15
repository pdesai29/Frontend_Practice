let firstName = "John";
const lastName = "Doe";
var age = 30;
const isMarried = false;
let height;

console.log(firstName, lastName, age, isMarried, height);

let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;

console.log(sum, difference, product, quotient, remainder);

let greeting = "Hello";
let name = "Alice";

let message = greeting + " " + name + "!";

console.log(message);

let temperature = 25;

if (temperature >= 30) {
  console.log("It's a hot day!");
} else if (temperature >= 20 && temperature < 30) {
  console.log("It's a nice day!");
} else {
  console.log("It's cold today!");
}

for (let i = 1; i <= 5; i++) {
  console.log("Iteration", i);
}

let fruits = ["Apple", "Banana", "Orange"];

for (let fruit of fruits) {
  console.log(fruit);
}

function greet(name) {
  return "Hello " + name + "!";
}

let greetingMessage = greet("Bob");
console.log(greetingMessage);

let person = {
  firstName: "Alice",
  lastName: "Smith",
  age: 25,
  isMarried: false,
  greet: function () {
    return "Hello, my name is " + this.firstName + " " + this.lastName + ".";
  },
};

console.log(person.greet());

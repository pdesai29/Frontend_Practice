let firstName: string = "John";
const lastName: string = "Doe";
let age: number = 30;
const isMarried: boolean = false;
let height: number | undefined;

function greet(name: string): string {
  return "Hello " + name + "!";
}

let greetingMessage: string = greet("Bob");

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  isMarried: boolean;
}

let person: Person = {
  firstName: "Alice",
  lastName: "Smith",
  age: 25,
  isMarried: false,
};

let fruits: string[] = ["Apple", "Banana", "Orange"];

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): string {
    return "Some sound";
  }
}

let cat = new Animal("Cat");
console.log(cat.makeSound());

class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo(): string {
    return `This is a ${this.year} ${this.brand} ${this.model}.`;
  }
}

let myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.displayInfo());

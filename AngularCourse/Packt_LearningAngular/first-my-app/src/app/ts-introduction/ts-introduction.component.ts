import { Component } from '@angular/core';

@Component({
  selector: 'app-ts-introduction',
  templateUrl: './ts-introduction.component.html',
  styleUrls: ['./ts-introduction.component.css'],
})
export class TsIntroductionComponent {
  public greetings: string = this.greetPeople('Krystian', 'Łukasz', 'Marcin');

  greetPeople(greeting: string, ...names: string[]): string {
    return `${greeting}, ${names.join(' and ')}!`;
  }
}

let brand: string = 'Chevrolet';
let message: string = `Today it's a happy day! I just bought a new ${brand} car`;
const PI = 3.14;

const obj: { a: number } = {
  a: 3,
};
obj.a = 4;

const brands: string[] = ['Chevrolet', 'Ford', 'GMC'];
const ages: number[] = [8, 5, 12, 3, 1];
const distances: any[] = ['1000km', 1000];

type Animal = 'Cheetah' | 'Lion';
const animal: Animal = 'Cheetah';

enum Brands {
  Chevrolet,
  Cadillac,
  Ford,
  Buick,
  Chrysler,
  Dodge,
}
const myCar: Brands = Brands.Ford;

enum StackingIndex {
  None = 0,
  Dropdown = 1000,
  Overrlay = 2000,
  Modal = 3000,
}
const mySelectBoxStacking: StackingIndex = StackingIndex.Dropdown;
const myCarBrandsName: string = Brands[1];

function test(): void {
  const a = 0;
}

function sayHello(name: string): string {
  return `Hello, ${name}`;
}

const sayHelloAnonymous = function (name: string): string {
  return `Hello, ${name}`;
};

const sayHelloArrow: (name: string) => string = function (
  name: string
): string {
  return `Hello, ${name}`;
};

function greetMe(name: string, greeting?: string): string {
  if (!greeting) {
    greeting = 'Hello';
  }
  return `${greeting}, ${name}`;
}
greetMe('Krystian');

function greetMeDefault(name: string, greeting: string = 'Hello'): string {
  return `${greeting}, ${name}`;
}
greetMeDefault('Krystian');

function greetPeople(greeting: string, ...names: string[]): string {
  return `${greeting}, ${names.join(' and ')}!`;
}
const getGreetings = greetPeople('Krystian', 'Łukasz', 'Marcin');

function hello(names: string): string;
function hello(names: string[]): string;
function hello(names: any, greeting?: string): string {
  let namesArray: string[];
  if (Array.isArray(names)) {
    namesArray = names;
  } else {
    namesArray = [names];
  }
  if (!greeting) {
    greeting = 'Hello';
  }
  return `${greeting}, ${namesArray.join(' and ')}!`;
}

const double = (x: number) => x * 2;
const add: (x: number, y: number) => number = (x, y) => x + y;
const subtract = (x: number, y: number): number => x - y;

const addAndDouble = (x: number, y: number): number => {
  const sum = x + y;
  return sum * 2;
};

// function delayedGreeting(name: string): void {
//   this.name = name;
//   this.greet = function () {
//     setTimeout(function () {
//       console.log(`Hello ${this.name}`);
//     });
//   };
// }

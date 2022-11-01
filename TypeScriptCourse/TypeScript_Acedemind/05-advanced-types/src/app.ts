import { ElevatedEmployee, printEmployeeInformation } from "./Employees.js";
import { useVehicle, Vehicle, Car, Truck } from "./Vehicles.js";
import { moveAnimal } from "./Animals.js";

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable | Numeric; // number or string or boolean, union type
type Strict = Combinable & Numeric; // only number, intersection type

let strict: Strict = 5;
let uni: Universal = 1;
uni = strict;
console.log("Universal type: ", uni);

// function overloads
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") return `${a} + ${b}`;
  return a + b;
} // type guards
console.log(add(4, "3"));

const emp1: ElevatedEmployee = {
  name: "Krystian",
  privileges: ["create-server"],
  startDate: new Date(),
};

printEmployeeInformation(emp1);
printEmployeeInformation({ name: "Manu", startDate: new Date() });

const veh1: Vehicle = new Car();
const veh2: Vehicle = new Truck();

useVehicle(veh1);
useVehicle(veh2);

moveAnimal({ type: "bird", flyingSpeed: 10 });

// type casting
const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input")
);
const userAsInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement.value = "Hi there!";
userAsInputElement.value = "Hi there!";

// index properties
interface ErrorContainer {
  [prop: string]: string;
}
const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};
console.log(errorBag);

const fetchedUserData = {
  id: "u1",
  name: "Krystian",
  job: {
    title: "CEO",
    description: "My own company",
  },
};

// optional chaining
console.log(fetchedUserData?.job?.title);

const userInput = null;
const storedData = userInput ?? "Default";

console.log(storedData);

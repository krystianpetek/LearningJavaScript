import { IGreetable } from "./IGreetable.js";
import { Person } from "./Person.js";

let user1: IGreetable;
user1 = new Person("Krystian");

user1.greet("Hi there");
console.log(user1);

// TYPE VS INTERFACE
type AddFnType = (a: number, b: number) => number;
interface AddFnInterface {
  (a: number, b: number): number;
}
let addFnType: AddFnType;
addFnType = (n1: number, n2: number): number => {
  return n1 + n2;
};
addFnType(1, 5);

let addFnInterface: AddFnInterface;
addFnInterface = (n1: number, n2: number): number => {
  return n1 + n2;
};
addFnInterface(5, 1);

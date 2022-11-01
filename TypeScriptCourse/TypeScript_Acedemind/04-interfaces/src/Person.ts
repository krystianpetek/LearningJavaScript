import { IGreetable } from "./IGreetable.js";

export class Person implements IGreetable {
  name: string;
  outputName?: string;
  age: number = 30;

  constructor(name: string, outputName?: string) {
    this.name = name;
    if (outputName) {
      this.outputName = outputName;
    }
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

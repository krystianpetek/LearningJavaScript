@Logger("Logging decorator")
@WithTemplate("<h1>My person object", "decorator")
export default class Person {
  name: string = "Krystian";

  constructor() {
    console.log("Creating person object...");
  }
}

export function WithTemplate(template: string, hookid: string) {
  return function (constructor: Function | any) {
    console.log("WithTemplate decorator executes");
    const hookEl = document.getElementById(hookid);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.style.color = "#fff";
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

export function Logger(commentary: string) {
  return function (constructor: Function) {
    console.log("Logger decorator executes");
    console.log(commentary);
    console.log(constructor);
  };
}

export function ConstructorDecorator(template: string, hookid: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super(..._);
        console.log("Constructor decorator executes");
        const hookEl = document.getElementById(hookid);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.style.color = "#fff";
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@ConstructorDecorator("<h1>My person object</h1>", "app")
export class OtherPerson {
  name: string = "Krystian";
  constructor() {
    console.log("Creating other person...");
  }
}

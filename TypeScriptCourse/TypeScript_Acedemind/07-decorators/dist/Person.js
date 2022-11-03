var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Person = class Person {
    constructor() {
        this.name = "Krystian";
        console.log("Creating person object...");
    }
};
Person = __decorate([
    Logger("Logging decorator"),
    WithTemplate("<h1>My person object", "decorator")
], Person);
export default Person;
export function WithTemplate(template, hookid) {
    return function (constructor) {
        console.log("WithTemplate decorator executes");
        const hookEl = document.getElementById(hookid);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.style.color = "#fff";
            hookEl.querySelector("h1").textContent = p.name;
        }
    };
}
export function Logger(commentary) {
    return function (constructor) {
        console.log("Logger decorator executes");
        console.log(commentary);
        console.log(constructor);
    };
}
//# sourceMappingURL=Person.js.map
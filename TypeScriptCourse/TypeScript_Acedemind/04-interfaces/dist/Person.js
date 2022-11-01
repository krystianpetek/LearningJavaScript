export class Person {
    constructor(name, outputName) {
        this.age = 30;
        this.name = name;
        if (outputName) {
            this.outputName = outputName;
        }
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
//# sourceMappingURL=Person.js.map
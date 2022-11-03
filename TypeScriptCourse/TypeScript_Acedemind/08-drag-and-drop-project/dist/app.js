var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Validate } from "./Validatable.js";
function Autobind(_a, _b, descriptor) {
    return {
        ...descriptor.value,
        get() {
            return descriptor.value.bind(this);
        },
    };
}
class ProjectInput {
    constructor() {
        this.templateElement = (document.querySelector("#project-input"));
        this.hostElement = document.querySelector("#app");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "user-input";
        this.titleInputElement = (this.element.querySelector("#title"));
        this.descriptionInputElement = (this.element.querySelector("#description"));
        this.peopleInputElement = (this.element.querySelector("#people"));
        this.configure();
        this.attach();
    }
    gatherUserInput() {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        const titleValidatable = {
            value: enteredTitle,
            required: true,
        };
        const descriptionValidatable = {
            value: enteredDescription,
            required: true,
            minLength: 5,
        };
        const peopleValidatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5,
        };
        if (!Validate(titleValidatable) ||
            !Validate(descriptionValidatable) ||
            !Validate(peopleValidatable)) {
            alert("Invalid input, please try again!");
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }
    clearInputs() {
        this.titleInputElement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            this.clearInputs();
            console.log(title, desc, people);
        }
    }
    configure() {
        this.element.addEventListener("submit", this.submitHandler);
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
}
__decorate([
    Autobind
], ProjectInput.prototype, "submitHandler", null);
const projectInput = new ProjectInput();
console.log(projectInput);
//# sourceMappingURL=app.js.map
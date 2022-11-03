import { Validatable, Validate } from "./Validatable.js";

function Autobind(_a: any, _b: string, descriptor: PropertyDescriptor) {
  return {
    ...descriptor.value,
    get() {
      return descriptor.value.bind(this);
    },
  };
}

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLTextAreaElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = <HTMLTemplateElement>(
      document.querySelector("#project-input")
    );
    this.hostElement = <HTMLDivElement>document.querySelector("#app");

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = <HTMLFormElement>importedNode.firstElementChild;
    this.element.id = "user-input";
    this.titleInputElement = <HTMLInputElement>(
      this.element.querySelector("#title")
    );
    this.descriptionInputElement = <HTMLTextAreaElement>(
      this.element.querySelector("#description")
    );
    this.peopleInputElement = <HTMLInputElement>(
      this.element.querySelector("#people")
    );
    this.configure();
    this.attach();
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };

    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };

    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      !Validate(titleValidatable) ||
      !Validate(descriptionValidatable) ||
      !Validate(peopleValidatable)
    ) {
      alert("Invalid input, please try again!");
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      this.clearInputs();
      console.log(title, desc, people);
    }
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const projectInput = new ProjectInput();
console.log(projectInput);

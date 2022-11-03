import Person, { OtherPerson } from "./Person.js";
import Product from "./Product.js";
import Printer from "./Printer.js";
import Course, { validate } from "./Course.js";
const pers = new Person();
console.log(pers.name);
const product = new Product("Serek wiejski", 5);
console.log(product);
const personOther = new OtherPerson();
console.log(personOther);
const printer = new Printer();
const button = document.querySelector("button");
button.addEventListener("click", printer.showMessage);
const courseForm = document.querySelector("form");
courseForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.querySelector("#title");
    const priceEl = document.querySelector("#price");
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse))
        alert("Invalid input, please try again!");
    console.log(createdCourse);
});
//# sourceMappingURL=app.js.map
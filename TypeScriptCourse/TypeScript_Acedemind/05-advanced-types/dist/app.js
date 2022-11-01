import { printEmployeeInformation } from "./Employees.js";
import { useVehicle, Car, Truck } from "./Vehicles.js";
import { moveAnimal } from "./Animals.js";
let strict = 5;
let uni = 1;
uni = strict;
console.log("Universal type: ", uni);
function add(a, b) {
    if (typeof a === "string" || typeof b === "string")
        return `${a} + ${b}`;
    return a + b;
}
console.log(add(4, "3"));
const emp1 = {
    name: "Krystian",
    privileges: ["create-server"],
    startDate: new Date(),
};
printEmployeeInformation(emp1);
printEmployeeInformation({ name: "Manu", startDate: new Date() });
const veh1 = new Car();
const veh2 = new Truck();
useVehicle(veh1);
useVehicle(veh2);
moveAnimal({ type: "bird", flyingSpeed: 10 });
const userInputElement = (document.getElementById("user-input"));
const userAsInputElement = document.getElementById("user-input");
userInputElement.value = "Hi there!";
userAsInputElement.value = "Hi there!";
const errorBag = {
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
console.log(fetchedUserData?.job?.title);
const userInput = null;
const storedData = userInput ?? "Default";
console.log(storedData);
//# sourceMappingURL=app.js.map
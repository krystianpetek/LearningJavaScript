import { merge, countAndDescribe, extractAndConvert, } from "./genericsFunctions.js";
import DataStorage from "./DataStorage.js";
const names = ["Krystian", "Patrycja"];
const splitted = names[0].split(" ");
console.log(splitted);
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 2000);
});
promise.then((data) => data.trim());
const mergedObject = merge({ name: "Krystian", hobbies: ["Sports"] }, { age: 24 });
console.log(mergedObject, [mergedObject.age, mergedObject.name]);
console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Sports", "Cooking"]));
extractAndConvert({ name: "Krystian" }, "name");
const textStorage = new DataStorage();
textStorage.addItem("Krystian");
textStorage.addItem("Patrycja");
textStorage.removeItem("Krystian");
const textItems = textStorage.getItems();
console.log(textItems);
const numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(3);
const numberItems = numberStorage.getItems();
console.log(numberItems);
function createCourseGoal(title, description, date) {
    let courseGoal = {
        title: title,
        description: description,
        completeUntil: date,
    };
    return courseGoal;
}
const myNames = ["Krystian", "Patrycja"];
console.log(createCourseGoal("title", myNames.toString(), new Date()));
//# sourceMappingURL=app.js.map
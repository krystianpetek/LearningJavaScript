import {
  merge,
  countAndDescribe,
  extractAndConvert,
} from "./genericsFunctions.js";

import DataStorage from "./DataStorage.js";

const names: Array<string> = ["Krystian", "Patrycja"];
const splitted = names[0].split(" ");
console.log(splitted);

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

promise.then((data) => data.trim());

const mergedObject = merge(
  { name: "Krystian", hobbies: ["Sports"] },
  { age: 24 }
);
console.log(mergedObject, [mergedObject.age, mergedObject.name]);

console.log(countAndDescribe("Hi there!")); // string length
console.log(countAndDescribe(["Sports", "Cooking"])); // array length

extractAndConvert({ name: "Krystian" }, "name"); // generics keyof guard

const textStorage = new DataStorage<string>();
textStorage.addItem("Krystian");
textStorage.addItem("Patrycja");
textStorage.removeItem("Krystian");
const textItems = textStorage.getItems();
console.log(textItems);

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(3);
const numberItems = numberStorage.getItems();
console.log(numberItems);

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {
    title: title,
    description: description,
    completeUntil: date,
  };

  return courseGoal as CourseGoal;
}

const myNames: Readonly<string[]> = ["Krystian", "Patrycja"];
// myNames.push("Józef");

console.log(createCourseGoal("title", myNames.toString(), new Date()));

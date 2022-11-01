const userName = "Krystian";
let age = 30;
age = 24;

function add(a: number, b: number) {
  let result;
  result = a + b;
  return result;
}

if (age > 20) {
  console.log("older than me");
}

const anotherAdd = (a: number, b: number = 1): number => {
  return a + b;
};
console.log(anotherAdd(2, 5));

const printOutput: (output: string | number) => void = (output) =>
  console.log(output);

printOutput(anotherAdd(14));

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();
  });
}
//spread
const hobbies = ["Sports", "Cookies"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);
console.log(...activeHobbies);

const person = {
  name: "Krystian",
  age: 24,
};

const copiedPerson = { ...person };
console.log(Object.is(person, copiedPerson));

//rest
const restAdd = (...numbers: number[]) => {
  return numbers.reduce((prevVal, currVal) => {
    return prevVal + currVal;
  }, 0);
};
const addedNumbers = restAdd(5, 10, 2, 3.7);
console.log(addedNumbers);

// destructuring array and objects
const [hobby1, hobby2, ...remainingHobbies] = activeHobbies;
console.log(remainingHobbies);

const { name: personName, age: personAge } = person;
console.log(personName, personAge);

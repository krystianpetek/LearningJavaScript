const personTwo: {
  name: string;
  age: number;
} = {
  name: "Krystian",
  age: 24,
};

type Person = {
  name: string;
  age: number;
  hobbies: string[];
  identity: [number, string]; // tuple type
  role: Role; // enum type
};

enum Role {
  ADMIN = 1,
  READONLY = 100,
  AUTHOR = 1000,
}

const person: Person = {
  name: "Krystian",
  age: 24,
  hobbies: ["Programming", "Running"],
  identity: [2, "author"],
  role: Role.ADMIN,
};
console.log(person);

let faboriteActivities: string[];
faboriteActivities = ["Sports"];

for (const hobby of person.hobbies) {
  console.log(hobby.toLowerCase());
}

type Combinable = number | string; // type alias to union type

function combine(
  input1: number | string, // union type
  input2: Combinable,
  resultConversion: "as-number" | "as-text" // union type of literal types
) {
  let result: number | string;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  )
    result = +input1 + +input2;
  else result = `${input1} ${input2}`;

  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);

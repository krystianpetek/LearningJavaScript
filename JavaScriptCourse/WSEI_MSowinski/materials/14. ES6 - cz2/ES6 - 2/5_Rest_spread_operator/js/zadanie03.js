console.log("\ntask 03");

let people = [
    {
        person: "Kim Yoo Suk",
        profession: "tyczkarz"
    },
    {
        person: "Sue Yoo",
        profession: "prawnik"
    },
    {
        person: "Dr. Alden Cockburn",
        profession: "urolog"
    },
    {
        person: "Rusty Kuntz",
        profession: "trener"
    }
];

function setFunnyName(...params) {
    people.push(...params);
}

setFunnyName(
    { person: "Kim Yoo Suk", profession: "tyczkarz" },
    { person: "Sue Yoo", profession: "prawnik" },
    { person: "Dr. Alden Cockburn", profession: "urolog" },
    { person: "Rusty Kuntz", profession: "trener" });
console.log(people);
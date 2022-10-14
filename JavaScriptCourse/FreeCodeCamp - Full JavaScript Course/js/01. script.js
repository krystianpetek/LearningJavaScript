function funcArray() {
    const myArray = [
        ["John", 23],
        ["cat", 2]
    ];
    myArray.push(["dog", 3]);
    var lastPop = myArray.pop();
    var firstShift = myArray.shift();
    myArray.unshift(["Krystian", 23]);
    console.log(myArray);
};
// funcArray();


function sum(arr, n) {
    // Only change code below this line
    if (n <= 0)
        return 0;

    if (n == 1)
        return arr[0];

    else
        return sum(arr, n - 1) + arr[n - 1];
    // Only change code above this line
}

console.log(sum([2, 3, 4, 5], 3));


// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
};

var legsValue = myDog.legs;
var tailsValue = myDog.tails;

var testObject = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObject["an entree"];
var drinkValue = testObject["the drink"];
console.log(entreeValue + " " + drinkValue);

testObject = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
var playerNumber = 16;
var player = testObject[playerNumber];
console.log(player);

// update prop
myDog.name = "Coder";
myDog.tails = 1;
myDog.legs = 4;
myDog.friends = ["freeCodeCamp Campers"];

// adding new prop to obj
myDog['bark'] = "woof!";
myDog.altBark = "bow-wow";
console.log(myDog.altBark);
// delete exist prop
delete myDog.bark;

//lookup object
function phoneticLookup(value) {

    var result = "";
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank"
    };
    result = lookup[value];
    return result;
}
console.log(phoneticLookup("foxtrot"));

// testing obj for prop
var myObj = {
    gift: "pony",
    pet: 'kitten',
    bed: "sleight"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}
console.log(checkObj("gift"));

var myMusic = [{
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
        "CD",
        "8T",
        "LP"
    ],
    "gold": true
},
{
    "artist": "Beau Carnes",
    "title": "Cereal Man",
    "release_year": 2003,
    "formats": [
        "Youtube video"
    ]
}
];

var myStorage = { // nested object
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

var myPlants = [ // nested array
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dendelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
var secondTree = myPlants[1].list[1];
console.log(secondTree);
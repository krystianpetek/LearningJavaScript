var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love A Bad Name"
        ]
    },
    "2468": {
        "album": "1998",
        "artist": "Prince",
        "tracks": [
            "1998",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(collectionObj, id, prop, value) {
    if (value === "")
        delete collectionObj[id][prop];
    else if (prop === "tracks") {
        collectionObj[id][prop] = collectionObj[id][prop] || [];
        collectionObj[id][prop].push(value);
    } else {
        collectionObj[id][prop] = value;
    }
    return collectionObj;
};
updateRecords(collection, 2468, "tracks", "test");
updateRecords(collection, 5439, "artist", "ABBA");
console.log(collection);


// wyszukiwarka profili
var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop, obiekt) {

    for (var i = 0; i < obiekt.length; i++) {
        if (obiekt[i].firstName === name) {
            return obiekt[i][prop] || "No such property";
        }
    }
    return "No such contact";
};

var data = lookUpProfile("Akira", "likes", contacts);
data = lookUpProfile("Sherlock","lastName",contacts);
console.log(data);

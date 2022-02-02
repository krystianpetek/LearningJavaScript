var collection = {
    "2548" : {
        "album" : "Slippery When Wet",
        "artist" : "Bon Jovi",
        "tracks" : [
            "Let It Rock",
            "You Give Love A Bad Name"
        ]
    },
    "2468" : {
        "album" : "1998",
        "artist" : "Prince",
        "tracks" : [
            "1998",
            "Little Red Corvette"
        ]
    },
    "1245" : {
        "artist" : "Robert Palmer",
        "tracks" : [ ]
    },
    "5439": {
        "album" : "ABBA Gold"
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(collectionObj, id, prop, value)
{
    if(value === "")
    delete collectionObj[id][prop];
    else if( prop === "tracks" )
    {
        collectionObj[id][prop] = collectionObj[id][prop] || [];
        collectionObj[id][prop].push(value);
    }
    else
    {
        collectionObj[id][prop] = value;
    }
    return collectionObj;
};
updateRecords(collection,2468,"tracks","test");
updateRecords(collection,5439,"artist","ABBA");
console.log(collection);

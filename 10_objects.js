/*
object structure

var obj_name = {
  "property": value,
   ...
   ...  
};
*/

// demo object
var myself = {
    "name": "Suaib Mahmud",
    "age": 23,
    "weight": 85,
    "friend": ["Deloear", "Shemanto", "Abid", "Akib", "Nazmul"],
    "habit & profession": "software development",
};

// accessing object property with dot notation

var name = myself.name;
// dot notation only works when property name has no space

// accessing object property with bracket notation

var habit_profession = myself["habit & profession"];

// update object property

myself.name = "Suaib Mahmud Palash"; // using dot notation
myself["name"] = "Suaib Mahmud Palash"; // using bracket notation

// delete object property

delete myself.friend; // using dot notation
delete myself["habit & profession"]; // using bracket notation

// testing objects for properties

function checkObj(property){
    if(myself.hasOwnProperty(property)){ // hasOwnProperty() method returns boolean indicating whether the object has the property or not
        return myself[property];
    }else{
        return "not found";
    }
}

console.log(checkObj("age"));

// nested objects

var myhome = {
    "place": {
        "country": "bangladesh",
        "division": "mymensingh",
    },
    "area": "1 katha",
}

console.log(myhome.place.country);

// access nested object

var myPlants = [
    {
        "type": "flowers",
        "list": ["rose", "tulip", "dandelion"] 
    },
    {
        "type": "trees",
        "list": ["fir", "pine", "birch"]
    }
];

console.log(myPlants[0].list[0]);

// record collection

var collection = {
    "agk1563": {
        "albam": "Shono",
        "artist": "Habib Wahid",
        "tracks": [
            "Projapoti",
            "Jadu",
            "Elomelo Mon"
        ]
    },
    "agk4652": {
        "albam": "Simply Kona",
        "artist": "Kona",
        "tracks": [
            "Opekkha",
            "NeelPori"
        ]
    },
    "agk7489": {
        "artist": "Piran Khan",
        "tracks": []
    },
    "agk6501": {
        "albam": "Uddessho Nei"
    }
};

// create a copy of record
var collectionCopy = JSON.parse(JSON.stringify(collection)); // JSON.parse() method is used to create javascript object from string


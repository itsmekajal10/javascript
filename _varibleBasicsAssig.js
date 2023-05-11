// 1] Primitive Dtata Types:-

// 1. Number
console.log("------Number-----")
var rollNumber = 51;
var price = 500 ;

console.log("rollNumber: 51,", "type:",typeof rollNumber);
console.log("price: 500,", "type:",typeof price);


// 2. Boolean --> true or false

var isFit = true;
var isHappy = true;


console.log("isFit: true,", "type:",typeof isFit);
console.log("isHappy: true,", "type:",typeof isHappy);

// 3. String --> Sequence of character enclosed in '' or ""

var favouriteMovie = " chak de India ";
var iplBestTeam = "Mumbai-Indians";
var hobby = "Traveling";

console.log("favouriteMovie: chak de India,", "type:",typeof favouriteMovie);
console.log("iplBestTeam: Mumbai Indians,", "type:",typeof iplBestTeam);
console.log("hobby: Traveling,", "type:",typeof hobby);

console.log("");


console.log("-----Difference Between undefined and null Data types-----");
console.log("");
console.log("undefined :- Variable is declared but it's value is not assigned to it.");
console.log("null :- Variable is declared but it's value is assigned as a null value.");
console.log("So the type of undefined as undefined and type of null as object");
console.log("For null returns object this is an error in the language, it’s not actually an object.");

console.log("");
console.log("------Examples of undefined and null------");
console.log("");

// 1. Undefined

var playerName;
console.log("Value of variable -->playerName: ", playerName);
console.log("Type of variable playerName is: ", typeof playerName);

// 2. null

var buildingName = null;
console.log("Value of variable -->buildingName:", buildingName);
console.log("Type of variable buildingName is: ", typeof buildingName);
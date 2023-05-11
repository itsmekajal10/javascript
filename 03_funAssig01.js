console.log("..........................  1  ...........................");

function show() {
  console.log(" 1]Function whithout argument and no return type ");
}
console.log();
show();

console.log(" ");

function show1() {
    console.log(" 2]Function whithout argument and no return type ");
  }
  console.log();
  show1();
  
  console.log(" ");
  

console.log("..........................  2  ...........................");

var firstName = "Kajal";
var lastName = "Gadade";
var collegeName = "Sangmeswar college,Solapur";

function personalDetail(firstName, lastName, collegeName) {
  var firstName = "Kajal";
  var lastName = "Gadade";
  var collegeName = "Sangmeswar college,solapur ";
  console.log( "firstName:", firstName, "\nlastName: ",lastName,"\ncollegeName:",
    collegeName
  );
}
personalDetail();

console.log("..........................  3  ...........................");

valueOne = "Virat";
valueTwo = "Anushka";

noOne = 1000;
noTwo = 2000;

function swapValueDude(argOne, argTwo) {
  console.log("Before Swap:", argOne, argTwo);
  var temp = argOne;
  argOne = argTwo;
  argTwo = temp;
  console.log("After Swap:", argOne, argTwo);
}

swapValueDude(valueOne, valueTwo);
swapValueDude(noOne, noTwo);

console.log("..........................  4  ...........................");

var a = 10.23;
var b = 600;
var c = 40;

var valueOne = "Hello";
var valueTwo = "Good";
var valueThree = "Morning";

function addThreeValues(paraOne, paraTwo, paraThree) {
  console.log("Before Addition:", paraOne, paraTwo, paraThree);
  var addValues = paraOne + paraTwo + paraThree;
  console.log("After Addition:", addValues);
}
addThreeValues(a, b, c);
addThreeValues(valueOne, valueTwo, valueThree);

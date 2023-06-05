console.log(
  "-----------------Using arrow with no args and no return value => ----------------"
);
let myFunction = () => {
  console.log("Good Morning Todays is Monday");
};
myFunction();

console.log(
  "------------ multiplication----------------------"
);
let multiply = (n1, n2, n3) => {
  var result = n1 * n2 * n3;
  console.log(
    `multiplication of 3 number is : ${n1} * ${n2} * ${n3} = ${result}`
  );
};

multiply(5, 5, 2);

console.log(
  "-----------------------------invoke the same function for the values---------------------------"
);
let show = (n1, n2, n3 = 1) => {
  var result = n1 * n2 * n3;
  console.log(
    `multiplication of 3 number is : ${n1} * ${n2} * ${n3} = ${result}`
  );
};

show(10, 4);

console.log(
  "----------------------------invoke the same function for the values-------------------------------"
);
let add = (n1, n2, n3, n4, n5) => {
  var result = (n1+ n2+n3+ n4+ n5);
  console.log(
    `addition  of 5 numbers is : ${n1} + ${n2} + ${n3} + ${n4} + ${n5}  = ${result}`);
};
add(100, 100, 200, 349, 756);

console.log(
  "------------------------------same arrow function for values-------------------------------"
);
let add1 = ("I am ", "learning ", "ES6 ", "features ", "in depth");
var result1 =("I am "+ "learning "+ "ES6 "+ "features "+ "in depth");

console.log(`Addition of word is :- ${result1}`);

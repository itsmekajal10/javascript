console.log('..................1...............');
var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11]
console.log("Total length of Array:-", arrayNumbers. length);
console.log('.....................2..............');
console.log('First Element:-',arrayNumbers[0]);
console.log('Last Element:-',arrayNumbers[arrayNumbers.length-1]);
console.log('Last Third Element:-',arrayNumbers[arrayNumbers.length-3]);
console.log('..................2.................');
var even = [];
for (let i = 0; i < arrayNumbers.length; i++) {
    if(arrayNumbers[i] % 2 == 0)
    even.push(arrayNumbers[i]);
    
}
console.log(`Even numbers in an array are:- ${even}`);
console.log('..................3......................');
var odds = [];
for (const num of arrayNumbers) {
  if (num % 2 === 1) {
    odds.push(num);
  }
}
console.log('Even numbers in an array are:-',odds); 
console.log('..................4............................');

  var count = 0
  for (let index = 0; index < arrayNumbers.length; index++) {
    var char = arrayNumbers[index] //
    if (index % 2 == 0) {
      var char = arrayNumbers[index]
      //  console.log(arrayNumbers[index]);
      count = count + char
    }
  }
  console.log(` Totoal count of the even positioned elements is ;- ${count}`)
  
  console.log(`-----------------------5--------------------------------------`)
  var count = 0
  for (let index = 0; index < arrayNumbers.length; index++) {
    var char = arrayNumbers[index] //
    if (index % 2 == 1) {
      var char = arrayNumbers[index]
      //  console.log(arrayNumbers[index]);
      count = count + char
    }
  }
  console.log(` Totoal count of the odd   positioned elements is ;- ${count}`)
  
  console.log(`-------------------------6------------------------------------`)
  var count = 0
  for (let index = 0; index < arrayNumbers.length; index++) {
    var char = arrayNumbers[index] //
  
    count = count + char
  }
  console.log(` Totoal count of the  all  positioned elements is ;- ${count}`)
  
  console.log(`-----------------------7--------------------------------------`)
  
  var count = 0
  for (let index = 0; index < arrayNumbers.length; index++) {
    var char = arrayNumbers[index] //
    if (char % 5 == 0) {
      console.log(`multiple of 5 no Are :- ${arrayNumbers[index]}`)
      //   count=count+char;
    }
  }
  
  console.log(`-----------------------8--------------------------------------`)

  
  var incl = arrayNumbers.includes(115)
  console.log(`The no 115 include in array :- "${incl}"  `)
  
  console.log(`----------------------9---------------------------------------`)
  
  var incl = arrayNumbers.includes(23)
  console.log(`The no 23 include in array :- "${incl}"  `)
  
  console.log(`-----------------------10--------------------------------------`)
  
  console.log(` Origial Array :- ${arrayNumbers}`)
  var insert = arrayNumbers.splice(3, 0, 55, 66)
  console.log(`Insert numbers 55,66 then new array will be  :- ${arrayNumbers}`)
  
  console.log(`-----------------------11--------------------------------------`)

  var insert = arrayNumbers.splice(4, 3)
  console.log(`Insert numbers 55,66 then new array will be  :- ${arrayNumbers}`)
  console.log(`-------------------------------------------------------------`)
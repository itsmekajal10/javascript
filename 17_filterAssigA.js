
const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];

console.log('--------greter than 50-------');
const arrayGreaterThan50 = arrayNumbers.filter( (element)=> {
    return element>50;
} );
console.log(arrayGreaterThan50);
console.log('--------Even Number-------');
const arrayEven = arrayNumbers.filter( (element) => {
    return element%2==0;
} );
console.log(arrayEven);
console.log('--------odd Number-------');
const odds = arrayNumbers.filter((element) => element % 2 === 1);
console.log(odds);
console.log("-------All the numbers which are multiple of 5--------");
const numbersMultipleOf5 = arrayNumbers.filter((element) => {
return element%5==0;
});
console.log('multiplay by 5:-',numbersMultipleOf5);

console.log("--------All the numbers which are between 20 and 50---------");
const numberBetween20And50 = arrayNumbers.filter((element) => {
return (element>20 && element<50);
});
console.log('Number between 20 & 50:-',numberBetween20And50);
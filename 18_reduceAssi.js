
console.log('---reduce-------');
const array_numbers =[20,11,40,25,37,49,9,90,60,2,19]
console.log('Given array:-',array_numbers);
console.log('------Sum of all number-------');
const sum = array_numbers.reduce( (runningTotal, value) => {
    return runningTotal + value;
} );
console.log('Sum of all Nubmber:-',sum);
console.log('------multiply by 5 and sum-------');



const sum1 = array_numbers.reduce( (runningTotal, value) => {
    return runningTotal * value ;
} );
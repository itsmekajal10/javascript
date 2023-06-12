
const array = [10,5,'a','b','h',11];
console.log("Given Array:=",array);

console.log('----------sorting array---------');

const araay1 = array.sort();
console.log(araay1);
console.log('----------sorting of array only Alphabet---------');

var stringArray =[];
var numberArray =[];
array.forEach(element =>{
    if(typeof(element)=== 'string'){
        stringArray.push(element);
    }
});
console.log(stringArray);

console.log('----------sorting of array only Number---------');
array.forEach(element =>{
    if(typeof(element)=== 'number'){
        numberArray.push(element);
    }
});
console.log(numberArray);
    

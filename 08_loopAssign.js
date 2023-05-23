console.log(`====================================== 1 ======================================`);
console.log('Im am very good IT Developer');

console.log(`====================================== 2 ======================================`);

function sumOfCube(){

    var result = 0;
    for (let index =1; index <=5; index++) {  
    var cube = index**3;
    console.log(`cube of ${index}: = ${cube}`);
    result =result + cube;   
}
console.log(`Addition of cube(1-5) is : ${result}`);
 }
sumOfCube();


console.log(`====================================== 3 ======================================`);

var str1 = "Hard work always pays back";
var str2 = "Soon I will be Angular IT Champ";
function oddPositionedChars(resultString){
    
    let result = "";
    for(i = 0; i<resultString.length; i++){
    if(i%2!==0 && resultString[i]!==" "){
    
        result=result+resultString[i];

    }
}
console.log(`Odd Position Characters: ${result}`);
}
console.log(`Given string is: "${str1}"`);
oddPositionedChars("Hard work always pays back");

console.log(`Given string is: "${str2}"`);
oddPositionedChars("Soon I will be Angular IT Champ");

console.log('---------------Array clone using shallow clone----------------------');
const arrayNums=[20,3,4,56,90,400,49]
console.log('original array:-',arrayNums);
const newarray= arrayNums;
console.log('clone array:-',newarray);

arrayNums.push(55,56);
console.log('clone array with update value 55 & 66 is:-',arrayNums);
console.log('---------------deep clone using spread operator----------------------------');
arrayEven=[2,30,14,8]
console.log('original array:-',arrayEven);
arrayEven.push(10,25);
console.log('clone array with update value 10 & 25 is:-',arrayEven);
console.log('-----------------------marge/concat-------------------------------------------');
const array4 = [...arrayNums,...arrayEven]
console.log('concat array:-',array4);
console.log('--------------------------employee info------------------------------------');
const employee_info={
    emp_id:27,
    emp_name:"john Doe ",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        june_month:"65,0000INR",
    },
    address:{
        locality:{
            colony:"om vrindavan society",
            street:"kanch pokli,431202",
        },
        city:"mumbai",
        state:"maharatra",
        country:"india"
    },
    mobiles:["+91 8600 3456 88" ,"1800 4567 32", "+91- 9096 5678 77"]
}
console.log(employee_info);


console.log('--------------------employee details----------------------------');

const employee_details={
    address:"om vrindavan society,kanch pokli,431202,mumbai,maharatra,india",
}    
console.log('Employee Address:-',employee_details);

const mob={

mobiles:"+91 8600 3456 88 ,1800 4567 32, +91- 9096 5678 77"
}
console.log('Employee Mobile No:',mob);
console.log('--------------------JSON.stringify-------------------------------');
const salary={
    Origenal:"40,0000INR"
}
const clonedObject = {...salary};

clonedObject.salary1="80,0000INR"

console.log('july month salary:-',salary);
console.log('updated salary:-',clonedObject.salary1);

const country1={
    country:"india"
}
const clonedObject1 = {...country1};

clonedObject1.country="United Kingdom"

console.log('country:-',country1);
console.log('updated country:-',clonedObject1.country);


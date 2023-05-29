const professor = {
    name: "abc",
    age: 22,
    city: "solapur",
    state: "Maharashtra",
    country: "India",

    degrees:{
        engineering: 'CSC',
        PHD:'Adv Computing',
        doctor:"MBBS",
        pharmacy:"B pharm",
    
    },

    certificates:['Hacker Rank Participation', ' Certificate in IFE course', ' Certificate in Adv Programming'],

    details: function(){
        console.log(`Professor Degrees: Engineering Degree: Engineering: ${degrees.engineering}, PHD: ${degrees.PHD}`);
    },

    getDetails: function(){
        let details = ` Engineering: ${this.degrees.engineering}, PHD: ${this.degrees.PHD}`;
        return details;
    },
    totalExperience: "14 years",
        
};
console.log(' Professor object properties are: ', professor);

console.log(` Degree object properties are: `, professor.degrees);
console.log(' Certificate array elements are: ', professor.certificates);

console.log(' --------Professor total degrees------- ');
const details = professor.getDetails();
console.log(`Professor degrees are: ${details}`);

console.log('----------Professor total Experience-------- ');
let totalExp = professor.totalExperience;
console.log(`Total Experience is: ${totalExp}`);

console.log(`---------Modify Property----------`);
console.log(`Existing object is: `, professor);
professor.city = "solapur";
console.log(`Modify city Pune to Mumbai is: `, professor);

console.log(` ---------Add one new certificate--------- `);
console.log(`Existing cerificates are: [${professor.certificates}]`);
let addCertificate = professor.certificates.push(" Oracle Certified");
console.log(`After add new certificate: [${professor.certificates}] `);

let arrLength = professor.certificates.length;
let lastArrElement =professor.certificates[arrLength-1];

console.log(` ---------Last element of array---------- `);
console.log(`Last element of array certificates is: ${lastArrElement}`);



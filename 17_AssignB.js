class employee{
    constructor(empId,empName,empDept,empSalary,empCompany){
        this.empId=empId;
        this.empName=empName;
        this.empDept=empDept;
        this.empSalary=empSalary;
        this.empCompany=empCompany;
    }
}
const empAnil=new employee(22,"Anil","IT",50000,"TCS");
const empRadha=new employee(33,"Radha","HR",74000,"Wipro");
const empRishi=new employee(55,"Rishi","finance",47000,"TCS");
const empSonali=new employee(66,"Sonali","finance",45000,"Infy");
const empMonika=new employee(77,"Monika","IT",40000,"wipro");
const empViny=new employee(88,"Vinayak","IT",75000,"TCS");
const empMahi=new employee(99,"Mahesh","HR",85000,"Infy");

const array=[empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi];
console.log(`1.find all the employees working in "TCS" and log only empName and empCompany`);

for (const employee of array) {
    if (employee.empCompany=="TCS") {
        console.log(`  empName :- ${employee.empName} ,empCompany  :- ${employee.empCompany}`);

    }   
     
}
console.log(`-------------------------------------------------------------------------`);
console.log(`2.find the "finance" department employees log department and employee name`);


for (const employee of array) {
    if (employee.empDept=="finance") {
    
        console.log(`  empDept :- ${employee.empDept}, empCompany  :- ${employee.empName}`);

    }   
     
}

console.log(`-------------------------------------------------------------------------`);
console.log(`3.Find the employees whose name starts with 'R' and complete employee details on console `);
for (const employee of array) {
    if (employee.empName.startsWith("R")) {
    
        console.log( `  Employee Details are:=>  empId :- ${employee.empId} ,empName  :- ${employee.empName}, empDept :- ${employee.empDept}, empSalary :- ${employee.empSalary} , empCompany :- ${employee.empCompany}`);

    }   
     
}
console.log(`-------------------------------------------------------------------------`);

console.log(`4.Find the employees whose salary is greater than 75000, and log on console emp name, company and salary`);
for (const employee of array) {
    if ((employee.empSalary > 75000) ) {
    
        console.log(`  Employee Details are ==>  empName  :- ${employee.empName}, empSalary :- ${employee.empSalary} , empName :- ${employee.empCompany}`);

    }   
     
}
console.log(`-------------------------------------------------------------------------`);

console.log(`5.Find the emp's whose salary greater than or equal 50000 and from 'IT' department`);
for (const employee of array) {
    if ((employee.empSalary >= 50000) && (employee.empDept=="IT")) {
    
        console.log( `  Employee Details are:=>  empId :- ${employee.empId} ,empName  :- ${employee.empName}, empId :- ${employee.empDept}, empSalary :- ${employee.empSalary} , empCompany :- ${employee.empCompany}`);

    }   
     
}

console.log(`-------------------------------------------------------------------------`);

console.log(`6.Find out all the employees from company 'Infy' and log complete employee details on console`);

for (const employee of array) {
    if (employee.empCompany=="Infy") {
    
        console.log( `  Employee Details are:=>  empId :- ${employee.empId} ,empName  :- ${employee.empName}, empId:- ${employee.empDept}, empSalary :- ${employee.empSalary} , empCompany is:- ${employee.empCompany}`);

    }   
     
}
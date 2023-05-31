class Vehicle {
    constructor(brand, model, price, color, speed) {
      this.brand = brand;
      this.model = model;
      this.price = price;
      this.color = color;
      this.speed = speed;
    }
  }
  
  const Thar = new Vehicle(
    "Thar", "Black","Thar", "25 Lack", "Desial"
  );
  const Audi = new Vehicle(
    "Audi","Black","Audi RS Q8", "9.50 Lack", " Desial" 
  );
  const BMW = new Vehicle(
    "BMW", "Black","BMW 7" ,"49.40 Lack", "Desial"
  );
  const Harrier = new Vehicle(
    "Harrier", "White","HArrierXE-213", "14.2 Lack", "Desial"
  );
  
  
  const arrayOfVehicle = [Thar, Audi, BMW, Harrier,];
  
  console.log(`----------------------------Vehical Details----------------------------------------------------------`);
  for (const vehicle of arrayOfVehicle) {
    console.log(
      `Vehicle details: ${vehicle.brand}, ${vehicle.model}, ${vehicle.price}, ${vehicle.color}, ${vehicle.speed}\n`
    );
  }
  
  console.log(`-----------------------------College Details---------------------------------------------------------`);
  
  class College {
    constructor(name, department, city, phoneNo) {
      this.name = name;
      this.department = department;
      this.city = city;
      this.phoneNo = phoneNo;
    }
  }
  const svri = new College("svri", "Engineering", "Pandharpur", 413304);
  const sinhgad = new College("Sinhgad", "Engineering", "pune", 4100012);
  const MIT = new College("MIT", "Engineering", "mumbai", 410001);
  const kbp = new College("kbp", "Engineering", "solapur", 02312601433);
  
  traverseObject(svri);
  traverseObject(sinhgad);
  traverseObject(MIT);
  traverseObject(kbp);
  
  function traverseObject(collegeObject) {
    for (const key in collegeObject) {
      if (Object.hasOwnProperty.call(collegeObject, key)) {
        const element = collegeObject[key];
  
        console.log(`${key}, ${element} `);
      }
    }
    console.log(`--------------------------------------------------------------------------------------`);
  }
  
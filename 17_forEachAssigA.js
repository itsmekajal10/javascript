console.log(`Given array is: [1, -7, 40, 502, -77, 91, 0, 108, 89, -601]\n`);
console.log(`1. Array Element with it's index is:`);
const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
arrayNumbers.forEach((element, index) => {
  console.log(`Element is: ${element}, Index is: ${index}`);
});
console.log(
  `---------------------------------------------------------------------------------------`
);
console.log(`2. Positive numbers are: `);
arrayNumbers.forEach((element) => {
  if (element > 0) {
    console.log(element);
  }
});
console.log(
  `---------------------------------------------------------------------------------------`
);

console.log(`3. Negative numbers are: `);
const arrayNegativeNums = [];
arrayNumbers.forEach((element) => {
  if (element < 0) {
    arrayNegativeNums.push(element);
  }
});
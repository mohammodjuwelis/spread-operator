// Max method spread operator
const max = Math.max(50, 60, 100, 200, 55, 80);
console.log(max);

const numbers = [10, 20, 30, 80, 40, 70, 60];
const arrMax = Math.max(numbers);
console.log(arrMax);

const arrMaxNumber = Math.max(...numbers);
console.log(arrMaxNumber);

const nums = [4, 5, 7, 8, 6];
const num2 = nums;
num2.push(12);
console.log(num2, nums);

const friends = ['mohammod', 'juwel', 'islam', 'alu', 'mama'];
const dosto = [...friends];
friends.push('ami push now');
console.log(dosto);
console.log(friends);


const sonka = [...friends, 'hollow juwel bro'];
console.log(sonka);


const num4 = ['amar name', 'ami janina', ...friends, 'tarpor', 'kikorbo' , 'ami janina'];
console.log(num4);




















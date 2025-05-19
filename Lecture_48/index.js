// All the math functions in JS are present in Math object so we have to use Math.max() for using them
console.log(Math.PI);
console.log(Math.max(6,234,2,525,23525,6));
console.log(Math.min(1283,35,151,235235,-123, 3254, -34334));
console.log(Math.round(1.4));
console.log(Math.floor(1.9));
console.log(Math.ceil(1.2))
console.log(Math.abs(-100));

console.log(Math.random());
console.log(Math.sqrt(16));
console.log("Value of 2 ^ 10", Math.pow(2,10));
console.log(Math.sin(180));
console.log(Math.tan(90));


// Date type datatype in JS 
let curr = new Date;
console.log(curr);

let date = new Date('June 20 1998 07:10');
console.log(date);

console.log(date.getDate());
console.log(date.getFullYear());
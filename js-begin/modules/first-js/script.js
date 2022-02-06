let a = 1;
let b;

console.log(typeof a);
// whenever a variable is used it is created automatically
console.log(typeof b); // undefined
console.log(typeof (b = 2)); // number
console.log(typeof b); // number

console.log(a + b);
a = 2;
console.log(b * a + a);
console.log((a + b) * a);

let int = 8;
let float = 3.7;

console.log(int + float);
console.log(int * float);

console.log(int / 10_000);
console.log(float / 2);

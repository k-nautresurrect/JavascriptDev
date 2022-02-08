let a = 8;
let b = 9;

console.log(a == b);
console.log(a != b);
console.log(a < b);
console.log(a > b);
console.log(a <= b); // a < b || a == b
console.log(a >= b); // a > b || a == b
console.log(a ^ b); // bitwise works just fine

console.log("\n");

let str = "brad";
let str2 = "bradane";

console.log(str == str2);
console.log(str < str2);
console.log(str > str2);
console.log(str >= str2);
console.log(str <= str2);
console.log(str != str2);
// ambigous statement however return 0 on every bitwise operation
console.log(str ^ str2);

console.log(console.log.toString());

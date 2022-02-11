// variable
const x = 90;
console.log(x);

let y = 70;
console.log(y); // not contain the latest value
y = 40;

var i;
console.log(i);
i = 19;
console.log(i);
var i = 87;
console.log(i);

console.log(typeof i);
console.log(typeof typeof i);

let stI = "2";
console.log(stI + "\t" + typeof stI);

stI = Number(stI);
console.log(stI + "\t" + typeof stI);

stI = "2.987";
console.log(stI + "\t" + typeof stI);

stI = Number(stI);
console.log(stI + "\t" + typeof stI);

stI = parseInt(stI);
console.log(stI + "\t" + typeof stI);
stI = "2.987";

stI = parseFloat(stI);
console.log(stI + "\t" + typeof stI);

// implicit type coercion
let st = "hello";
let num = 45;
console.log(st + num);
console.log(st - num);
st = "3";
console.log(st - num);
st = "A";
st = Number(st);
console.log(st - num);

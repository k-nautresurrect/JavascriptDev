// Arrow function
let sumArrow = (a, b) => a + b; // minimal operations

console.log(sumArrow(4, 5));
console.log(sumArrow);
console.log(sumArrow.toString());

/**
 * arrow function also follows all the
 * properties of function hoisting
 * which states that
 *  the function is considered when interpreter read line by
 *  line code and only then the whole function will come in
 *  action
 */

let printName = (name) => name; // (name) => { return name; }

console.log(printName("kushagra"));

let printHi = (name) => "hi " + name;

console.log(printHi("kushagra"));

let noParams = () => console.log("hi");

noParams();

function func(x, callback) {
  callback(x);
}

func("this", (str) => console.log(str));

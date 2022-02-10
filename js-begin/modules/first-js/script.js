// Closures
let a = 5;

function print() {
  console.log(a); // the latest value of a
}

a = 4;
print();

/**
 * closures
 * accessing something outside their own scope
 *
 */

function closure(variable) {
  let c = "instring";
  return function func(variable2) {
    console.log(variable);
    console.log(variable2);
    console.log(c);
  };
}

let afunc = closure(3);
afunc(9);

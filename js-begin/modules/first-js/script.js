// Scoping

// Global Scope
let a = 3;

// block scope 1
{
  let b = 4;
  // block scope 2
  {
    let c = 5;
    console.log(c);
    console.log(b);
    console.log(a);
  }
}

// labels in js
first: {
  let i = 0;
  second: {
    if (i === 0) {
      break second;
    }
    console.log(i);
  }
  while (true) {
    if (i > 10) {
      break first;
    }
    console.log(i);
    i++;
  }
}

function scope() {
  let d = 9;
  console.log(a);
}

scope();

// to access th other scope variable
/**
 * -> either pass the value from one function to other (prefered)
 * -> make a global object with the variable names
 * -> use global variable directoly
 */

// using object
let scriptObj = {};

scope: {
  scriptObj.x = 90;
}

function scopeFun() {
  scriptObj.x = 20;
}

console.log(scriptObj.x);
scopeFun();
console.log(scriptObj.x);

// passing params

function init() {
  let a = 40;
  let b = 89;
  let d = 90;
  setup(a, b, d);
}

function setup(...args) {
  console.log(args[0]);
  console.log(args[1]);
}

init();

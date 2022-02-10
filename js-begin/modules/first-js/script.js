// functions
function sayhi() {
  return "hi";
}

let str = sayhi();
console.log(sayhi());

function sayhello() {
  console.log("hello");
  return;
}

let v = sayhello();
console.log(v);

let lg = console.log("this is lg");

function sayName(name) {
  console.log(name);
}

sayName(); // default name is undefined
sayName("c"); // string is passed
sayName(98); // Number is passed

function typedName(name) {
  if (typeof name === "string") {
    return name;
  }
  return -1;
}

function typedNum(num) {
  if (typeof num === "number") {
    return num;
  }
  return -1;
}

console.log(typedName(90));
console.log(typedName("kushagra"));
console.log(typedNum(87));
console.log(typedNum("89"));

console.log("\n");

function sayThis(variable) {
  console.log(typeof variable);
}

sayThis; // gives undefined

console.log("console.log " + sayThis); // coerce to string
console.log(sayThis(89));
console.log(sayThis.toString()); // the whole defination of the function

console.log("\n");

let funcStr = sayThis.toString();
let prntStr = "";
for (let i = 0; i < funcStr.length; i++) {
  // process.stdout.write(funcStr[i]); // in node js
  prntStr += funcStr[i];
}
console.log(prntStr);

// function as a parameter
function func(variable) {
  console.log(variable + "\t" + typeof variable);
}

function paramfunc(fun) {
  fun(89);
}
paramfunc(func);
console.log();

function sumOfTwo(a, b, callback) {
  callback(a + b);
  console.log(callback.toString());
}
function handleSum(num) {
  // this is handle sum
  console.log(num);
}
sumOfTwo(1, 2, handleSum);

// real function calling the callback
function helloName(name, callback) {
  let edited = callback(name);
  console.log(edited);
  console.log(callback);
}
// callback function
function editName(name) {
  return "Hello " + name;
}

helloName("kushagra", editName);

// callback using anonymous function
editedName("kushagra", function (name) {
  return "hello " + name;
});

function editedName(name, callback) {
  let edited = callback(name);
  console.log(callback); // anonymous
  console.log(edited);
}

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

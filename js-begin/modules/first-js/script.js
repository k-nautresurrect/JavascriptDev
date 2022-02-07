let flag = true;

console.log(flag);
console.log(Number(flag));
flag = "truth";
console.log(flag); // now it will be a string
console.log(typeof flag);

if (flag) {
  console.log("if executed");
}

console.log(Boolean(flag)); // true
flag = "g";
console.log(Number(flag)); // nan

flag = -1;
console.log(Boolean(flag));

flag = 0;
console.log(Boolean(flag));
console.log("\n");
console.log(true ^ false);
console.log(true && false);
console.log(true || false);
console.log(!false);
console.log(Boolean(true + false)); // coerction happens here
console.log(Boolean(false - true));
console.log(Boolean(false * true));
console.log(Boolean(true / false)); // infinity == true
console.log("\n");
// exercise
let happy = true;
let fun = true;

console.log(happy && fun);
console.log(!happy && fun);

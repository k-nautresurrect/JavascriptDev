let string = "with double quote";

console.log(string);

let str = 'hi there this is a "string"';

console.log(str);

let nme = "brad";

console.log("hello there " + nme);
nme = string + str;

console.log(nme);

let strng = ""; //immutable
for (let i = 1; i <= 10; i++) {
  strng += i;
}
console.log(strng);
console.log(strng[2]);

strng = "hello";
strng[2] = 4;
console.log(strng[2] * 2); // not a number
for (let i = 0; i <= strng.length + 1; i++) {
  console.log(
    "index is " + strng.indexOf(strng.charAt(i)) + " char is " + strng.charAt(i)
  ); // if out of bound then it will return 0 for that index
}
console.log(typeof strng.charAt(3));
console.log(strng);

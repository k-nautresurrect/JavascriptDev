let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.push(11);
arr.push(["num1", "num2"]);
console.log(arr);
console.log(arr[11]);
console.log(arr[11][0]);

let charr = ["a", "b", "c", "d", "e"];

console.log(charr[parseInt(charr.length / 2)]);

console.log(typeof arr);

// object
let person = {
  name: "brad",
  age: 25,
  num: 6,
  sayhi: function (name) {
    console.log("hi " + name);
  },
  sayhi2(name, age) {
    console.log("hi " + name + " " + age);
  },
  adress: {
    street: 98,
    city: "florida",
  },
  hobies: ["driving", "prog"],
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(typeof person.age);
person.sayhi("jhon");
person.sayhi2("jhonas", 45);
console.log(person.adress.city);

// Stacktrace and call stack by chrome dev

function doThing(a, b, name) {
  print(sum(a, b));
  print(editedName(name));
}

function print(variable) {
  console.log(variable);
}

function editedName(name) {
  // adhoaido; // Stacktrace throws error however a breakpoint can be defined.
  return "hello " + name;
}

function sum(a, b) {
  return a + b;
}

doThing(3, 7, "kushagra");

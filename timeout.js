function doSomething() {
  console.log("I am coding JavaScript");
}

console.log("First: ami sobar age");
console.log("Second: I am the second person");
// setTimeout(doSomething, 5000);
setTimeout(function () {
  console.log("I am using VS Code");
}, 5000);
setTimeout(() => {
  console.log("Exploring MDN articles");
}, 4000);
console.log("Third: I am the third person");
console.log("Fourth: I am the fourth person");

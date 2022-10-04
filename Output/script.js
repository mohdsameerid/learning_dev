// (1) 
// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = "Rasel";
//     let age = 21;
//   }
//   sayHi();
//   // ans -> undefined , ReferenceError
//  ------------------------------------------------------------ 
//  Q1)
function Pet(name) {
  this.name = name;
  this.getName = () => this.name;
}
const cat = new Pet('Fluffy');
console.log(cat.getName());// What is logged? 
const { getName } = cat;
console.log(getName()); // What is logged? 
// output -> 
// Fluffy
// Fluffy


//ques(2)-
// const object = {
//   message: 'Hello, World!',
//   logMessage() {
//       console.log(this.message); 
//       // What is logged? 
//   }
// };
// setTimeout(object.logMessage, 1000); 
// output ->  undefined


// Q3) How can you call logMessagefunction so that it logs "Hello, World!" ? 
// const object1 = {
//   message: 'Hello, World!'
// };
// function logMessage() {
//   console.log(this.message);
//   // "Hello, World!" 
// } 
// logMessage.call(object1);
/// this is the way you call -> logMessage.call(object1);


// Q4)
// const object3 = {
//   who: 'World',
//   greet() {
//       return `Hello, ${this.who}!`;
//   },
//   farewell: () => {
//       return `Goodbye, ${this.who}!`;
//   }
// };
// console.log(object3.greet()); // What is logged? 
// console.log(object3.farewell()); // What is logged? 
// outout -> 
// Hello, World!
// Goodbye, undefined!
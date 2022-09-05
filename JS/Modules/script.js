import { str , sayHi } from "./user.js";

document.body.innerHTML =  str;  // display on HTML page
console.log(str); // displaying on console

document.body.innerHTML = sayHi("samir");
console.log(sayHi("I am an indian"))


import { str, sayHi, user } from "./user.js";

document.body.innerHTML =  str;  // display on HTML page
console.log(str); // displaying on console

document.body.innerHTML = sayHi("samir");
console.log(sayHi("I am an indian"))


let obj  = new user(); // class user object created
import { str, sayHi as hi, user } from "./user.js";

document.body.innerHTML =  str;  // display on HTML page
console.log(str); // displaying on console

document.body.innerHTML = hi("samir");
console.log(hi("I am an indian"))


let obj  = new user(); // class user object created
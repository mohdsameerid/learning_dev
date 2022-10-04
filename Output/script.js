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

//ques-
const object = {
  message: 'Hello, World!',
  logMessage() {
      console.log(this.message); 
      // What is logged? 
  }
};
setTimeout(object.logMessage, 1000); 
// undefined


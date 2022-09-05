let str = "I am an Indian";

 function sayHi(name){
    return `Hello ${name}`;
}

class user{
    constructor(){
        console.log("Constructor Method");
    }
}

export {str, sayHi, user}; // shortcut for exporting things
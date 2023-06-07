// Recursion - when function call itself
//  If the function call itself there must be an end point otherwise it will call infinite time.


console.log("Welcome to Programiz!");

let counter = 1;
function demo(number){
    if(counter > number){
        return false;
    }
    
    console.log("Counter ",counter);
    counter++;
    demo(number);
}
demo(10);
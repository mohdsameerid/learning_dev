// closures -> function along with its lexical(parent) scope forms a closure

// function x(){
//     var a = 10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// let innerReturn = x();
// innerReturn(); // 10


// function outter(){
//     var a = 10;
//     // setTimeout(call back func,time in (ms))
//     console.log("Before Hello js");
//     setTimeout(function (){
//         console.log(a);
//     },3000);
//     console.log("After Hello js");
// }
// outter();
// output ->
// Before Hello js
//  After Hello js
// 10


function outter(){
    for(let i = 1; i <= 5; i++){
        function b(i){
            setTimeout(function (){
                console.log(i);
            },i * 1000);
        }
        b(i);  
    }
    console.log("HEllo Js")
}
outter();
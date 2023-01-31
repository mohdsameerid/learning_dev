// function a(){
//     var b = 10;
//     c();
//     function c(){
//         console.log(b);  // 10
//     }

// }
// a();
// console.log(b);  // reference error ( b is not defined )



// var a = 10;
// {
//     let a = 1000;
//     console.log(a);  // worked  (output: 1000)
// }

// illegal shadowing
// let b = 10;
// {
//     var b = 1000;
//     console.log(b);   // error SyntaxError : Identifer 'a' has already been declared.
// }
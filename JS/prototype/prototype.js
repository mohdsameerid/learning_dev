// 3 ways to declare object

// // (1)
// const obj = new Object({
//     name: "Ajay"
// })

// // (2)
// const obj = new obj();


// (3)
// use of prototype in object
//      --> obj2 > (rollno:20 aur prototype bhej raha hai obj ka) 
//      --> and obj > (name: Samir aur inbuild obj property )
// const obj = {
//     name: "Samir"
// }
// // console.log(obj)
// const obj2 = {
//     rollno: "20",
//     __proto__:obj
// }
// console.log(obj2.name) // Samir





//////////////////////////////////Prototype Inheritance /////////////////////////////
// const obj3 = {
//     name: "Samir",
//     rollno: 200,
//     getRollNo: function(){
//         return this.rollno
//     },
//     getName: function(){
//         return this.name
//     }
// }
// // console.log(obj)
// const obj4 = {
//     rollno: "20",
//     // name : "Amit",
//     __proto__:obj3
// }
// const obj5 = {
//     class : "MCA",
//     __proto__:obj4
// }
// console.log(obj5.getRollNo()) // 20
// console.log(obj5.getName()) //  Samir



//////////////////////////////////////////////////////////////////////////////////
const arr = ["grapes"];
// console.log(arr);

let array = new Array();
console.log(array);
let obj = new Object();
console.log(obj)
const func = new Function();
console.log(func)



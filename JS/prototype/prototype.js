// 3 ways to declare object

// // (1)
// const obj = new Object({
//     name: "Ajay"
// })

// // (2)
// const obj = new obj();


// (3)
//      --> obj2 > (rollno:20 aur prototype bhej raha hai obj ka) 
//      --> and obj > (name: Samir aur inbuild obj property )
const obj = {
    name: "Samir"
}
// console.log(obj)
const obj2 = {
    rollno: "20",
    __proto__:obj
}
console.log(obj2) // Samir

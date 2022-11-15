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
console.log(obj2.name) // Samir





//////////////////////////////////Prototype Inheritance /////////////////////////////
const obj3 = {
    name: "Samir",
    rollno: 200,
    getRollNo: function(){
        return this.rollno
    },
    getName: function(){
        return this.name
    }
}
// console.log(obj)
const obj4 = {
    rollno: "20",
    // name : "Amit",
    __proto__:obj3
}
console.log(obj4.getRollNo()) // 20
console.log(obj4.getName()) //  Samir
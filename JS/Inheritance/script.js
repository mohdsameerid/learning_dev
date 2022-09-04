// class employee{
//     constructor(name){
//         console.log("Employee class "+name);
//     }
// }
// class manager extends employee{
//     constructor(name){
//         super("John");
//         console.log("Manager class "+name);
//     }
// }
// let e1 = new manager("Samir");


// chaining by super Keyword ( C --> B --> A ) 
class A{
    constructor(){
        console.log("Class A");
    }
}
class B extends A{
    constructor(name){
        super();
        console.log("Class B with "+name);
    }
}
class C extends B{
    constructor(){
        super("Samir");
        console.log("Class C");
    }
}

let obj = new C();
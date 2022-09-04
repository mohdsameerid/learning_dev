class employee{
    constructor(name){
        console.log("Employee class "+name);
    }
}
class manager extends employee{
    constructor(name){
        super("John");
        console.log("Manager class "+name);
    }
}
let e1 = new manager("Samir");
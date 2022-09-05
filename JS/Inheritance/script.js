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
// class A{
//     constructor(){
//         console.log("Class A");
//     }
// }
// class B extends A{
//     constructor(name){
//         super();
//         console.log("Class B with "+name);
//     }
// }
// class C extends B{
//     constructor(){
//         super("Samir");
//         console.log("Class C");
//     }
// }

// let obj = new C();


// Manager and Employee Salary Distribution
class Employee{
    constructor(emp,age,salary){
        this.empname = emp;
        this.age = age;
        this.salary = salary;
    }
    message(){
        document.write(`<h3>Employee Details</h3>
                     Name: ${this.empname} <br>
                     Age: ${this.age} <br>
                     Salary: ${this.salary}`);
    }
}

class Manager extends Employee{
    message(){
        let travalingAllowence = 1000;
        let homeAllowence = 4000;
        let totalSalary = this.salary + travalingAllowence + homeAllowence; 
        document.write(`<h3>Manager Details</h3>
                         Name: ${this.empname}<br>
                         Age: ${this.age}<br>
                         Salary: ${totalSalary}`);
    }
}
let obj = new Manager("Samir",22,21000);
let obj2 = new Employee("Aliasa", 25,21000);

obj.message();
obj2.message();
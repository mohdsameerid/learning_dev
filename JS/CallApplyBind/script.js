// Call Apply and Bind

let person = {
    name: "Samir",
    age: 22,
    course: "Bca",
    printDetails: function (){
        console.log(this);
        console.log(this.name);
    }
};
person.printDetails();

let person2 = {
    name: "Hassen",
    age: 22,
    course: "Mtech",
};

// function borrowing OR call method 
person.printDetails.call(person2);

/// output 
//  {name: 'Samir', age: 22, course: 'Bca', printDetails: ƒ}
//  Samir
//  {name: 'Hassen', age: 22, course: 'Mtech'}
//  Hassen
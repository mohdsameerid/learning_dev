// Call Apply and Bind

let person = {
    name: "Samir",
    age: 22,
    course: "Bca",
    printDetails: function (city, country, gender){
        console.log(this);
        console.log("And other details: "+city+" "+country+" "+gender);
    }
};
// person.printDetails();

let person2 = {
    name: "Hassen",
    age: 22,
    course: "Mtech",
};

// Function borrowing ---->
///////////////////  call method ///////////////////////
// person.printDetails.call(person2);

/// output 
//  {name: 'Samir', age: 22, course: 'Bca', printDetails: ƒ}
//  Samir
//  {name: 'Hassen', age: 22, course: 'Mtech'}
//  Hassen



////////////////////////////// apply (apply me array hi pas kr dete hai) //////////////////////
person.printDetails.call(person2,"kanpur","India","Male");
person.printDetails.apply(person2,["Lucknow","India","Male"]);

// output -> 
// {name: 'Hassen', age: 22, course: 'Mtech'}
//  And other details: kanpur India Male
// {name: 'Hassen', age: 22, course: 'Mtech'}
//  And other details: Lucknow India Male



/////////////////////////////////////// Bind /////////////////////
// bind exactly same hai call() ki traha bas bind() me reference of copy milti hai
let BindDetails = person.printDetails.bind(person2,"Ahamdabad","india","Male");
console.log(BindDetails);
// ƒ (city, country, gender){
//     console.log(this);
//     console.log("And other details: "+city+" "+country+" "+gender);
// }
BindDetails();
// {name: 'Hassen', age: 22, course: 'Mtech'}age: 22course: "Mtech"name: "Hassen"[[Prototype]]: Object
// And other details: Ahamdabad india Male
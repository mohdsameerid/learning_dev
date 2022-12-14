// (1) sum of array
let arr = [1,2,3,4,1,2,3,4,5,6,8];  
var sum = 0; // mistake i made is to declare sum nothing.
// thats why it is giving me NAN
// undefined * number --> NAN 
console.log(sum);
for(var i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(sum);


// (2) undefined + number always give you NAN
let a = undefined;
let b = 1000;
let c = a + b;
console.log(c);  // NaN


// (3) remove duplicacy from Array
// (1) way using includes method 
let array = [1,2,3,1,8,3,2,3];
let uniqueArr = [];
array.forEach((e) => {
    if(uniqueArr.includes(e)){
        // do nothing 
    }else{
        uniqueArr.push(e);
    }
});
// document.body.innerHTML = uniqueArr;
console.log(uniqueArr);  // [1, 2, 3, 8]


// (2)way of doing using set method
let char = ['a','b','c','s','a','d','a'];
let uniqueChar = [...new Set(char)];
console.log(uniqueChar); // ['a', 'b', 'c', 's', 'd']



// ques (1)
if(null == 0){
    console.log("hello");
}else{
    console.log("world");
}
 // output -> world

 // ques (2)
 if(null === 0){
    console.log("hello");
}else{
    console.log("world");
}
// output -> world


if(null === null){
    console.log("hello");
}else{
    console.log("world");
}
// output -> hello

if(null == null){
    console.log("hello");
}else{
    console.log("world");
}
// output -> hello

var va = null;
undefined
console.log(typeof(a));
// output -> object
undefined
var va = 10;
undefined
console.log(typeof(a));
// output -> number



kkk = 1;
console.log(kkk);
var kkk;
// output -> 1


console.log(p);
p = 1;
var p;
// output -> 1


//////////// 3 consecutive element of array sum //////////////////
////////////  * if sum is 7 return true else false/////////////// 
function SumCon(arr,n){
for(let i = 0; i < arr.length-n+1; i++){
    let sum = 0;
    // console.log("i : "+arr[i])
    for(let j = 1; j <= n; j++){
        sum = sum + arr[i+j];
        // console.log(sum)
    }
    if(sum == 7){
        return true;
    }
}
return false;
}
let res = SumCon([2,3,8,3,5,2,0],3);
console.log(res);
// true



/////////////////////////////////////////////////////////////////////////////////////////////
// Remove Duplicacy from Array
let num = [1,1,3,4,5,6,7,1,2,4,5,3,6,7,9,43,7,9,5,3];
console.log(num);     // [ 1, 1, 3, 4, 5, 6, 7, 1, 2, 4, 5, 3, 6, 7, 9, 43, 7, 9, 5, 3 ]
let newArr = [];
for(let i = 0; i < num.length-1; i++){
    if(!newArr.includes(num[i])){
        newArr.push(num[i]);
    }
}
console.log(newArr); // [ 1, 3, 4, 5, 6, 7, 2, 9, 43 ]

// After Removing Duplicate data, Now Sort Data in increasing order.
newArr.sort(function (a, b){
    return a - b;
});
console.log(newArr); // [ 1, 2, 3, 4, 5, 6, 7, 9, 43 ]

//  Now Sort Data in Decreasing order.
newArr.sort(function (a, b){
    return b - a;
});
console.log(newArr); // [ 43, 9, 7, 6, 5, 4, 3, 2, 1 ]

////////////////////////////////////////////////////////////////////////////////////////

////// pattern program using javascript //////////////
// *
// **
// ***
// **
// *

function pattern(num){
    let nstar = 1;
    let string = "";
    for(let r = 1; r <= num; r++){
        //stars
        for(let s = 1; s <= nstar; s++){
            // console.log("*");
            string += "*";
        }
        //line change
        // console.log("\n");
        string += "\n";
        // prepration for the next row
        if(r <= num/2){
            nstar++;
        }else{
            nstar--;
        }
    }
    console.log(string);
}

pattern(5);

///////////////////// array reverse ///////////////////////////////////////////

const nums = [1,2,3,4,5];
console.log(nums.reverse());   //  [ 5, 4, 3, 2, 1 ]
let charArr = ["Sameer", "Haseen", "Naman"];
console.log(charArr[2]); // Naman
console.log(charArr.reverse());  // [ 'Naman', 'Haseen', 'Sameer' ]
console.log(charArr[2]); // Sameer



let charArr2 = ["Sameer", "Haseen", "Naman", "amir", "Atif"];
console.log(charArr2.reverse());  // [ 'Atif', 'amir', 'Naman', 'Haseen', 'Sameer' ]
console.log(charArr2.reverse());  // [ 'Sameer', 'Haseen', 'Naman', 'amir', 'Atif' ]



///////////////////////////////////map /////////////////////////////////////////
let Nums = [1,2,3,4,5,5,6,7];
let numberse = [5,5,5,5,5,5,5,5,5,5];
// map 
let Num = numberse.map((ele) => {
    return (ele * 2);
});
console.log(Num); // [ 2, 4, 6, 8, 10, 10, 12, 14 ]

let numbers = [1,2,3,4,5,6,7,8,9,10];
let ns = numbers.map(ele => ele > 5)
console.log(ns); // [ false, false, false, false, false, true, true, true, true, true ]


/////////////////////////////////// filter with Array  ////////////////////////////////
// Nums = [ 2, 4, 6, 8, 10, 10, 12, 14 ]
let filter = Nums.filter((ele) => {
    return ele > 5;
})
console.log(filter);   // [ 6, 7 ]

 // filter
let n = [1,"two",3,"four"];
let filterArray = n.filter((element) => {
    return typeof(element) == 'string'
})
console.log(filterArray); // [ 'two', 'four' ]
console.log(n); // [ 1, 'two', 3, 'four' ]
console.log(n.filter(ele => typeof(ele) == 'number')); // [ 1, 3 ]


//////////////////////////////Seprate number and array /////////////////////////////////////
let numchar = ["one",2,"three",6,3,493,30,"hello",'s',33];
function filt(Array){
    let newArr = [];
    let newArraynumber = [];
    
    // 1) way to Achieve 
    // for(let i = 0; i < Array.length; i++){
    //     // console.log(Array[i])
    //     let tpystr = typeof(Array[i]);
    //     let tpynum = typeof(Array[i]);
    //     if(tpystr === 'string'){
    //         newArr.push(Array[i]);
    //         // console.log("h")
    //     }
    //     if(tpynum === 'number'){
    //         newArraynumber.push(Array[i]);
    //     }
    // }
    
    // 2) way to Achieve 
    newArr = Array.filter(ele => {
        return typeof(ele) == "string"
    })
    newArraynumber = Array.filter(ele => {
        return typeof(ele) == "number"
    })
    let con = newArr.concat(newArraynumber);
    return con;
}
console.log(filt(numchar)); // [ 'one', 'three', 'hello', 's', 2, 6, 3, 493, 30, 33 ]


////////////////////////// filter with Array object ///////////////////////////////
const someArray = [
    { id: 1, name: "John" }, 
    { id: 2, name: "Smith" },
    { id: 3, name: "Bob" },
    ];
let val = someArray.filter((ele) =>  ele.name === "Bob" ); 
console.log(val);   // [ { id: 3, name: 'Bob' } ]


// reduce 
let ArrNum = [145, 45, 10, 20];
let Reduce = ArrNum.reduce((ac, ele) => {
   return ac - ele;  
});
console.log(Reduce);  // 70

let ArrNum2 = [145, 45, 10, 20, 90];
let Reduce2 = ArrNum2.reduce((ac, ele) => {
   return ac - ele;  
});
console.log(Reduce2); // -20

// console.log("Hello World");

let price = [1,2,3,6,3,5];
let totalSum = price.reduce((totalPrice, currentPrice) => {
    return totalPrice = totalPrice + currentPrice
})
console.log(totalSum); //20


////////////////////////// findIndex ///////////////////////////////////////////////
// 1) Using the Array findIndex() method with a simple array example
let ranks = [1, 5, 7, 8, 10, 7];
let index = ranks.findIndex(rank => rank === 7);
console.log(index); // 2

// 2) Using the Array findIndex() method with a more complex condition
let Ranks = [279,18,392,200,18,303,30,4020,42];
let Rank = Ranks.findIndex((elem, idx) => {
    return elem == 18 && idx > 2;
});
console.log(Rank); //  4

// Using the Array findIndex() method with an array of objects
let product = [
    {  name: "Android" , price: 2000 },
    {  name: "iphone" , price: 5000 },
    {  name: "Tablet", price: 6000 },
   ];
let idx = product.findIndex((ele) =>  {
  return  ele.price > 5000;
   });
console.log(idx); // 2


const products = [
  { name: 'Phone', price: 999 },
  { name: 'Computer', price: 1999 },
  { name: 'Tablet', price: 995 },
];
const inde = products.findIndex(product => product.price > 1000);
console.log(inde); // 1



/////////////////////// filter and find method diff ///////////////////
const Array = [
    { id: 1, name: "John" }, 
    { id: 2, name: "Smith" },
    { id: 3, name: "Bob" },
    ];
let fil = Array.filter((ele) =>  ele.name === "Bob" ); 
console.log(fil);  
// [ { id: 3, name: 'Bob' } ]  


let fin = Array.find((ele) => ele.name === "Bob" );
console.log(fin);  
// { id: 3, name: 'Bob' }



//////////////////////////concat method //////////////////////////////
let names = ["samir", "Haseen", "Amir"];
let rollno = [1,2,3];
console.log(names.concat(rollno)); /// [ 'samir', 'Haseen', 'Amir', 1, 2, 3 ]

// indexOf method 
console.log(names.indexOf("Amir")); // 2
console.log(names.indexOf("Naman")); // -1
 

////////////////////////// diff b/w indexOf and findIndex //////////////////////
// indexOf me hm direct ele ka idx pta krte hai
console.log(names.indexOf("Amir")); // 2

// findIndex me hm condition lga kr idx pta krte hai
console.log(names.findIndex(ele => ele == "Amir")); // 2


//////////////////////////////////print element in same line ////////////////////
let mixedArray = [1,2,"three", "four", 5, 6, 9, "s"];
mixedArray.forEach((ele) => {
    process.stdout.write(`${ele} `);
})

 /////////////////////// some() and evrey()
let mixArray = [1,2,"three", "four", 5, 6, 9, "s"];
let d = mixArray.some(ele => {
    return ele === "s"
})
console.log(d); // true
let s = mixArray.some(ele => {
    return ele === "ssss"
})
console.log(s); // false


let numb = [1,1,1,1,1,1];
let newA = numb.every(ele => {
    return ele === 1
})
console.log(newA) // true

let numb2 = [1,1,1,1,1,1];
let newAr = numb2.every(ele => {
    return ele === 2
})
console.log(newAr) // false


///////////////////////////////// includes() //////////////////////////////////////////

let numbers2 = ["Samir","Haseen","Naman","Amit","Amir", "Shubham","Dev"];

console.log(numbers2.includes("Naman")); // True 
console.log(numbers2.includes("Chandan")); // false

 ///////////////////////////// sort array only with String  ////////////////////////////////////

console.log(nums);
   // ["Samir","Haseen","Naman","Amit","Amir", "Shubham","Dev"]
console.log(nums.sort());
  // [ 'Amir', 'Amit', 'Dev', 'Haseen', 'Naman', 'Samir', 'Shubham' ]


let nu = [399,4,5,27,45,9,6,2,6,9,1,21,1,4,7,0,2,1];
let num1 = nu.sort(function(a,b){
    return a - b
})
console.log(num1); // [ 0, 1, 1, 1, 2, 2, 4, 4, 5, 6, 6, 7, 9, 9, 21, 27, 45, 399 ]
let num2 = nu.sort(function(a,b){
    return b - a
})
console.log(num2); // [ 399, 45, 27, 21, 9, 9, 7, 6, 6, 5, 4, 4, 2, 2, 1, 1, 1, 0 ]




////////////////////////////////digit frequency ////////////////////////////////////////

let numberArray = [10,2,1,4,1,4,7,3,1,1,31,1,1,3,2];
let target = 111111111;
let count = 0;
numberArray.forEach((ele) => {
    if(ele == target){
        count++;
    }
});
if(count > 0)
console.log(count);
else
console.log("-1");



/////////////////////////remove extra spaces from array expect once //////////////////////

let lis = ["sasm", "dsadas", "d", "", "", "", "" , "ad", "ad", "", "", "", "", "dsad", "","daa", "a","",""];
let ar = [];
let flag = true;
for(let i = 0; i  <lis.length; i++){
    if(lis[i] == ""){
        if(flag){
            ar[i] = "";
            flag = false;
        }
    }else{
        ar[i] = lis[i];
        flag = true;
        
    }
}
console.log(ar);



// ///////////////// remove space from string using split() /////////////////////////////
function trimLeftSpace() {
    var str = "   Angry Bird   ";
    var splitTrim = str.split('');
    var trimStr = "";
    console.log(splitTrim);
    for (var index = 0; index < splitTrim.length; index++) { //trim left space
        if(splitTrim[index] == " ") {
            // trimStr += str[index];
        }else{
            trimStr += str[index];
        }
    }
    return trimStr;
 }
 console.log(trimLeftSpace())


 function trimLeftSpace(str) {
    var doneTrimming = false
    var ret = ""
    for (var index = 0; index < str.length; index++) {
        if(str[index] !== ' '){
            doneTrimming = true
        }
        if(doneTrimming){
            ret += str[index]
        }
    }
    return ret;
}

var result = trimLeftSpace("   Angry Bird   ");
console.log(result);


//////////////////////////////////Reverse String /////////////////////////////////////////////////

let str = "w3villa";
let newString = "";
for(let i = str.length-1; i >= 0; i--){
    newString += str[i];
}
console.log(newString);

///////////////////////////////Remvome Duplicacy from Array//////////////////////////////
let numbe = [1,2,4,2,1,3,1,2,1,3,342]
let counters = {};
let newArray = [];
for(let items of numbers){
    counters[items] = (counters[items] || 0) + 1;
}
let i = 0;
for(let elem in counters){
    newArray[i] = elem;
    i++;
}
console.log("Orignal Numbers  : "+numbers);
console.log("Revome duplicacy : "+newArray);
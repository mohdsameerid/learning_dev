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
let arr2 = [2,3,1,3,5,2,0];
function SumCon(){
let flag = false;
let sum = 0;
for(let i = 0; i <= arr.length-3; i++){
    sum = arr2[i] + arr2[i+1] + arr2[i+2];
    if(sum == 7){
        // console.log(`${arr[i]} + ${arr[i+1]} + ${arr[i+2]}`);
        // console.log(true);
        flag = true;
        return flag;
        break;
    }
}
}
console.log(SumCon());
// true



/////////////////////////////////////////////////////////////////////////////////////////////
// Remove Duplicacy from Array
let arr = [1,1,3,4,5,6,7,1,2,4,5,3,6,7,9,43,7,9,5,3];
console.log(arr);     // [ 1, 1, 3, 4, 5, 6, 7, 1, 2, 4, 5, 3, 6, 7, 9, 43, 7, 9, 5, 3 ]
let newArr = [];
for(let i = 0; i < arr.length-1; i++){
    if(!newArr.includes(arr[i])){
        newArr.push(arr[i]);
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
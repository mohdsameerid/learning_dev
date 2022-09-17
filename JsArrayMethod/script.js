// forEach method
// Sum of Array
let nums = [1,2,3,4,5,6,7,8,9,10];
var sum = 0;
nums.forEach((item,index,arr) => {
    // console.log(`a[${index}] = ${item}`);
    sum += item;
});
console.log(sum); // sum is -> 55



// Number of time character is come in Array
let Char = ['a' , 'b' , 'c' , 'd' ,'b' , 'c' , 'd' , 'f' ];
let count = {};

Char.forEach((item) => {
    if(count[item]){
        count[item]++;
    }else{
        count[item] = 1;
    }
});
console.log(count);  /// {a: 1, b: 2, c: 2, d: 2, f: 1}


let num = [1,2,3,4,5,6,7,8,9,10];
num.map((value) => {
    console.log(value);
})
// console.log(value);
num.forEach((item) => {
    console.log(item);
})
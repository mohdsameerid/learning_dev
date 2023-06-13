// print the odd number of Array using Recursion.
// [1,2,3,4,5,6,7] -input
// [1,3,5,7] - output
// (arr[i] % 2 !== 0) - hint
let myArr = [1,2,3,4,5,6,7,8,9,10];
let i = 0;
let res = [];

function demo(arr){
    if(arr[i] == undefined){
        return;
    }
    else if(!(arr[i] % 2 == 0)){
        // console.log(arr[i]);
        res.push(arr[i]);
        i++;
        demo(arr);
    }else{
        i++;
        demo(arr);
    }
}
demo(myArr);
console.log(res)
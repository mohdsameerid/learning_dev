Array.prototype.myConcat = function(){
    let argumentsBanch = arguments; 
    let inputArr = this;
    
    for(let items of argumentsBanch){
        // console.log(items)
        inputArr.push(items)
    }
    // console.log(inputArr);
    let flattedArr = inputArr.flat(Infinity);
    
    return flattedArr;
}

let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]
let arr3 = "y";
let arr200 = ['s','dd','gg']

const res = arr1.myConcat(arr2 , arr3, arr200, arr2);
console.log(res)
// problem -- 
// [1,1,2,3,4,4,5,6,7,7,8] -> input 
// [1,2,3,4,5,6,7,8] -> output 


// (1) Approach for Count unique Numbers ..
//    1 -> Make a Set of counter[items] using  Array
//    2 -> Push that key to newArray / get last key that is your answer.
// function abc(Array){
//     let counter = {};
//     let newArray = [];

//     for(let items of Array){ // Make a Set of counter[items] using  Array
//         counter[items] = (counter[items] || 0) + 1;
//     }
//     let newval;
//     for(let key in counter){ 
//         // newArray.push(key);  //  Push that key to newArray
//         newval = key;         // last key get vahi answer ho jayega.
//         // console.log(key)
//     }
//     return newval;
// }
// let res = abc([1,1,2,3,4,4,5,6,7,7,8]);
// console.log(res);



// problem 
// i  j
// [1,2,3,4,5,6,7,8,7,7,8] -> input 
// [1,2,3,4,5,6,7,8] -> output 

// (2) Approach for Count unique Number (only for Sorted Array)
// start with i = 0 and (j = 1 to iterate array)
//     -> Array[i] != Array[j] 
//      (1)  i++;
//      (2)  Array[i] = Array[j]
function countUniqueNumber(Array){
    let i = 0;
    for(let j = 1; j < Array.length; j++){
        if(Array[i] != Array[j]){
            i++;
            Array[i] = Array[j]
        }
    }
    return i+1;
}
let res = countUniqueNumber([1,1,2,3,4,4,5,6,7,7,8,9,9,9]);
console.log(res)
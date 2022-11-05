// problem -- 
// [1,1,2,3,4,4,5,6,7,7,8] -> input 
// [1,2,3,4,5,6,7,8] -> output 


// (1) Approach for Count unique Numbers ..
//    1 -> Make a Set of counter[items] using  Array
//    2 -> Push that key to newArray
function abc(Array){
    let counter = {};
    let newArray = [];

    for(let items of Array){ // Make a Set of counter[items] using  Array
        counter[items] = (counter[items] || 0) + 1;
    }

    for(let key in counter){ 
        newArray.push(key);  //  Push that key to newArray
        // console.log(key)
    }
    return newArray;
}
let res = abc([1,1,2,3,4,4,5,6,7,7,8]);
console.log(res);
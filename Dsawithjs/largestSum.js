// problem 
// [1,2,3,4,3,5,4,6,7,8] -> input 
// Sum of largest 4 consequtive = 21 -> output 


function sumOfLargestConsequtive(Array,n){
    let maxSum = 0;
    for(let i = 0; i < Array.length - n+1; i++){
        let sum = Array[i] + Array[i+1] + Array[i+2] + Array[i+3];

        if(sum > maxSum){
            maxSum = sum;
        }
        // console.log(Array[i])
    }
    return maxSum;
}

function sumOfLargestConsequtive2(Array,n){
    if(n > Array.length){
        console.error("Numbers is Greater than Array");
    }else{
        let max = 0;
        for(let i = 0; i < Array.length-n+1; i++){
            let temp = 0;
            for(let j = 0; j < n; j++){
                temp += Array[i+j];
            }
            if(temp > max){
                max = temp;
            }
        }
        return max;
    }
}
let res =  sumOfLargestConsequtive(  [1,2,3,4,3,5,4,6,7,8,9], 4 );
console.log(res)

let res2 = sumOfLargestConsequtive2( [1,2,3,4,3,5,4,6,7,8,9], 4 );
console.log(res2)
/// problem
// [1,2,3,4,5,6] -> input 
// [6,5,4,3,2,1] -> output

function reverseArray(Array){
    let left = 0;
    let right = Array.length-1;

    while(left < right){
        let temp = Array[left];
        Array[left] = Array[right];
        Array[right] = temp;

        left++;
        right--;
    }
    return Array;
}
console.log(reverseArray([1,2,3,4,5,6]));

//Reverse Array Using inbuilt Method
let arr = [6,5,4,3,2,1];
console.log(arr.reverse());
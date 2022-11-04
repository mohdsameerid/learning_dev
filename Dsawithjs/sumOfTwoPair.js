// checking sum zero 
// [-5,-4,-3,-2,0,2,4,6,8] -> input
// [-4,4] -> output

function sumOfTwoPair(arr){
    for(let numbers of arr){
        for(let j = 1; j < arr.length; j++){
            if(numbers + arr[j] == 0){
                return [numbers,arr[j]];
            }
        }
       
    }
}
let result = sumOfTwoPair([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);
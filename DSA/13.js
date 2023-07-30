
function getMaxLength(arr, n){
    let result = 0; 
    let count = 0;
    
    for(let i = 0; i < n; i++){
        if(arr[i] == 0){
            count = 0;
        }
        else{
            count++;
            result = Math.max(result, count);
        }
    }
    return result;
}

// Driver code
let arr = new Array(0,1,1,1,1,0,1,1,1,1,1,1,0,0);
let n = arr.length;
console.log(getMaxLength(arr, n));



// problem is given array2 is sqaure of array1

// arr1 = [1,2,3,4] , arr2 = [1,9,4,16] --> input
// true --> output 

function isSquare(arr1,arr2){
    for(let i = 0; i < arr1.length; i++){
        let isSqure = false;
        for(let j = 0; j < arr2.length; j++){
            
            if(arr1[i] * arr1[i] == arr2[j]){
                isSqure = true;
            }
            if(j == arr2.length-1){
                if(!isSqure){
                    return false;
                }
            }
        }
    }
    return true;
}
let res = isSquare([1,2,3,4],[1,9,4,26]);
console.log(res) //  false

let res2 = isSquare([1,2,3,4],[1,9,4,16]);
console.log(res2) // true
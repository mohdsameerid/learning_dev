// problem is given array2 is sqaure of array1

// arr1 = [1,2,3,4] , arr2 = [1,9,4,16] --> input
// true --> output 

// function isSquare(arr1,arr2){
//     for(let i = 0; i < arr1.length; i++){
//         let isSqure = false;
//         for(let j = 0; j < arr2.length; j++){
            
//             if(arr1[i] * arr1[i] == arr2[j]){
//                 isSqure = true;
//             }
//             if(j == arr2.length-1){
//                 if(!isSqure){
//                     return false;
//                 }
//             }
//         }
//     }
//     return true;
// }
// let res = isSquare([1,2,3,4],[1,9,4,26]);
// console.log(res) //  false

// let res2 = isSquare([1,2,3,4],[1,9,4,16]);
// console.log(res2) // true
// it is giving us O(n square) , so we have to convert into  O(n)




// O(n) solution 
function check(arr1,arr2){
    let map1 = {}
    let map2 = {}
    for(let items of arr1){ // n time 
        map1[items] = (map1[items] || 0) + 1;
    }
    
    for(let items of arr2){ // n time
        map2[items] = (map2[items] || 0) + 1;
    }
    
    for(let key in map1){ // obj key compare in the term of square 
        if(!map2[key * key]){
            return false;
        }
        if(map1[key != map2[key * key]]){ // value compare 
            return false;
        }
    }
    return true;
}
let rs = check([1,2,2,4], [1,4,4,36]);
console.log(rs)

// time complexity is O(n) - > linear
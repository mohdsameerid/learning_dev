// Checking Square in another Array
// input -> Arr1 = [1,2,3,4] , Arr2 = [1,4,9,16]
// output -> True

// Approach
// iterate on Arr1
// make square of every Element in Arr1
// check that element present in Arr2
// present { true }
// not presnt { False}

// using build in function
function checkSqaure(arr1, arr2) {
  for (let items of arr1) {
    let square = items * items;
    // console.log(square);
    if (!arr2.includes(square)) return false;
  }
  return true;
}
const res = checkSqaure([1, 2, 3, 4], [1, 4, 9, 10020]);
console.log(res);
// Time Complexity O(n*n)

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// (2) Approach Without using Build in function

function isSquareinAnotherArray(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let isSqaure = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] * arr1[i] === arr2[j]) {
        isSqaure = true;
      }
      if (j === arr2.length - 1) {
        if (!isSqaure) {
          return false;
        }
      }
    }
  }
  return true;
}
const res2 = isSquareinAnotherArray([1, 2, 3, 4], [1, 4, 9, 26]);
console.log(res2);
// Time Complexity O(n*n)

//////////////////////////////////////////////////////////////////////////////////////////
// (3) Approach 
// arr1 = [1,2,3,4] , arr2 = [1,4,9,16]

function checkSquare(arr1,arr2){
  let map1 = {};
  let map2 = {};
  
  for(let item of arr1){
      map1[item] = (map1[item] || 0) + 1;
      // console.log(map1);
  }
  // console.log(map1);
  for(let item of arr2){
      map2[item] = (map2[item] || 0) + 1;
      // console.log(map1);
  } 
  // console.log(map2);
  
  for(let key in map1){
      if(map1[key] !== map2[key * key]){ /// value compare 
          return false;
      }
      if(!map2[key * key]){ // obj key compare in the terms of sqaure
          return false;
      }       
  }
  return true;
}
const res3 = checkSquare([1,2,5,4],[1,4,9,16]);
console.log(res3)
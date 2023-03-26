//  Binary Search
// input -> [1,2,3,4,5,6,7,8,9,10] , target = 7
// output -> true

// Approach
// left = 0; right = arr.length-1;
// while(left < right){
// mid = left + right / 2;
// if(target > arr[mid])
//  left = mid+1;
// if else(target < arr[mid])
//  right = mid-1;
// else
//  found the number
//}

//return -1;

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2); // for excluding . (point) value
    // console.log(mid);
    if (target > arr[mid]) {
      left = mid + 1;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      return true;
    }
  }
  return false;
}
const res = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
console.log(res);

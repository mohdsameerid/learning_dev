// count largest consecutive of sum
// input -> [1,2,3,4,5,5,5,6,7,7,8,8,8,9,9,9] ,  digit = 4
// output -> 35

// (1) Approach
//   max = 0;
// Iterate the Array ( 0 to arr.length-digit)
//   Sum = arr[i] + arr[i+1] + arr[i+2] + arr[i+3];
//   if(sum > max)
//        max = sum;

function largestConsecutiveSum(arr, d) {
  let max = 0;
  for (let i = 0; i < arr.length - d + 1; i++) {
    sum = arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
const res = largestConsecutiveSum(
  [1, 2, 3, 4, 500, 5, 5, 6, 7, 10, 10, 10, 10],
  4
);
console.log(res);

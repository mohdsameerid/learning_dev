// Checking Sum Zero
// input - [-5,-4,-3,-2,0,2,4,6,8]
// output - [-4,4]

function getSumPairZero(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) {
      /// agar sum == 0  hai to return that value
      return [array[left], array[right]];
    } else if (sum > 0) {
      // agar sum bada hai to right idx ko minus minus (--)
      right--;
    } else {
      // else agar sum chota hai to left index ko plus plus (++)
      left++;
    }
  }
}
const res = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(res);

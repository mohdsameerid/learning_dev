// Checking Sum Zero
// input - [-5,-4,-3,-2,0,2,4,6,8]
// output - [-4,4]

function getSumPairZero(array) {
  for (let number of array) {
    for (let j = 1; j < array.length; j++) {
      if (number + array[j] === 0) {
        return [number, array[j]];
      }
    }
  }
}
const res = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(res);

/// Counting Unique Number
// input -> [1,2,3,4,5,5,5,6,7,7,8,8,8,9,9,9]
// output -> 9

//////////////////////////////////////////////////////////////////////////////////////////////
// (1) Approach
// Make a set.
// count the keys of set and that is going our Answer.

function countingUniqueNumber(Array) {
  let count = {};
  // make a set
  for (let i = 0; i < Array.length; i++) {
    count[Array[i]] = (count[Array[i]] || 0) + 1;
  }

  let unique = 0;
  // count the key of set and that is our Answer.
  for (let key in count) {
    unique++;
    // console.log(key);
  }
  return unique;
}
let res = countingUniqueNumber([
  1, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8, 8, 8, 9, 9, 9, 10, 16,
]);
console.log(res);



//////////////////////////////////////////////////////////////////////////////////////////////////////
// (2) Approach
//  i = 0;
// loop ( j = 1 to Array.length )
// if(Array[i] !== Array[j])
// i++;
// Array[i] = Array[j];

function UniqueNumber(Array) {
  let i = 0;
  for (let j = 1; j < Array.length; j++) {
    if (Array[i] !== Array[j]) {
      i++;
      Array[i] = Array[j];
    }
  }
  return i + 1;
}
const res2 = UniqueNumber([1, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8, 8, 8, 9, 9, 9, 89]);
console.log(res2);

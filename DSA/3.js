// String Anagram
// input -> str1 = "Hello" , str2 = "llheo"
// output -> true

function isAnagram(str1, str2) {
  let string1 = str1.toUpperCase();
  let string2 = str2.toUpperCase();
  //checking the length of both string
  if (string1.length != string2.length) {
    return false;
  }

  let counter = {};
  for (let letter of string1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }

  for (let items of string2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] = counter[items] - 1;
  }
  return true;
}
const res = isAnagram("HellO", "llHeo");
console.log(res);

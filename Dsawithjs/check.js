/////////////////////////////////conversion String to Array///////////////////////////////

var str = "w3villa";

let left = 0;
let right = str.length-1;
let newArr = [];
while(left <= right){
    newArr.push(str[left])
    left++;
}
console.log(str);
console.log(newArr);
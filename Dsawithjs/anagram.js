// Anagram 
// 1: length of both string would be same
// 2: elements also would be same (maybe Arrangement differ)


// problem -> Anagram
// String1 = "hello" ,  String = "lleho" // -> input 
// Anagram String  // -> output 

function anagram(str1, str2){
    if(str1.length != str2.length){  // both string length checking 
        return false;
    }
    
    let count = {};
    for(let elem of str1){       // making set of count
        count[elem] = (count[elem] || 0) + 1; 
    }
    
    for(let items of str2){  // removing items
        if(!count[items]){
            return false;
        }
        count[items]--;
    }
    return true;
}
let res = anagram("hello", "lleho");
console.log(res);  // true

let res2 = anagram("helloj", "lleho");
console.log(res2); // false

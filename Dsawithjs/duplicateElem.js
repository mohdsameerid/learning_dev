// problem 
// [28,302,303,202,4,2,302,2,4] -> input 
// [28,302,303,202,4,2] -> output 


function duplicateElement(Array){
    let newArray = [];
    for(let Numbers of Array){
        if(newArray.includes(Numbers)){
            // do nothing
        }
        else{ // push elements
            newArray.push(Numbers);
        }
    }
    return newArray;
}

let res  = duplicateElement([28,302,303,202,4,2,302,2,4]);
console.log(res);
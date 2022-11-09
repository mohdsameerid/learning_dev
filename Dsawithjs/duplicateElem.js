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



///////////////////////////////Remvome Duplicacy from Array//////////////////////////////
let numbe = [1,2,4,2,1,3,1,2,1,3,342]
let counters = {};
let newArray = [];
for(let items of numbers){
    counters[items] = (counters[items] || 0) + 1;
}
let i = 0;
for(let elem in counters){
    newArray[i] = elem;
    i++;
}
console.log("Orignal Numbers  : "+numbers);
console.log("Revome duplicacy : "+newArray);
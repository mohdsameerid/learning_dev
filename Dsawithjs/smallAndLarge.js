// Find Smallest and Largest Number in an Array

// [108,482,22,349,29,9,36,2,183,7,34] -> input 
// Smallest No: 2 and Largest No: 482 -> output 

function arr(array){
    let smallest = array[0];
    let largest = array[0];
    for(let elem of array){
        if(elem > largest){
            largest = elem;
        }
        if(elem < smallest){
            smallest = elem
        }
    }
    console.log("Smallest No: "+smallest+" Largest No: "+largest);
}
arr([108,482,22,349,0,29,,4038,9,36,2,183,7,34]);
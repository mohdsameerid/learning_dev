 // [1,2,3,4] -> input 
 // 10 -> output 

 function arr(Array){
    let sum = 0;
    for(let i = 0; i < Array.length; i++){
        sum += Array[i];
    }
    return sum;
 }
 let res = arr([1,2,3,4,5]);
 console.log(res); // 10
 // problem -> Sum of Elements in Array 
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



// problem -> Sum of five Numbers & find out which number is greatest
// 1,39,2,37,29 --> input
// sum is 108 & greatest Number is 39

function sumAndGreatest(n1,n2,n3,n4,n5){
    let sum = n1+n2+n3+n4+n5;
    // let assume n1 is greatest
    let max = n1;
    if(n2 > max){
        max = n2;
    }
    if(n3 > max){
        max = n3; 
    }
    if(n4 > max){
        max = n4;
    }
    if(n5 > max){
        max = n5;
    }
    console.log("Sum is: "+sum);
    console.log("Greatest Number is: "+max);
}
sumAndGreatest(1,39,2,37,29);
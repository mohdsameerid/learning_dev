// binary Search
//  mn     md         mx
// [1,2,3,4,5,6,7,8,9,10] -> input 
// search = 8


function binarySearch(Array, d){
    let l = 0;
    let h = Array.length-1;
   
    while(l <= h){
        let  mid = Math.floor((l + h)/2);
       
        if(d > Array[mid]){  // agar data bada hai mid se 
            l = mid+1;
        }
        else if(d < Array[mid]){ // agar data chota hai mid se
            h = mid-1;
        }
        else{  // data same mid se
        //    console.log(mid);
            return true;
        }
    }
    return -1;
    
}
let res = binarySearch([1,2,3,4,5,6,7,8,9],9);
console.log(res);
let myArr = [2,3,1,5,4,0,67675,7];
// console.log(myArr);
let i = 0;
let j = 1;
let newList = [];

function checkSort(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}
// console.log(checkSort(myArr));
function isSorted(arr){
    if(checkSort(arr)){
        newList = arr;
        return;
    }
    else if(arr[i] < arr[j]){
        i++;
        j++;
        isSorted(arr);
    }else{
        [arr[i],arr[j]] = [arr[j],arr[i]];
        i = 0;
        j= 1;
        isSorted(arr);
    }
    // return arr;
}
isSorted(myArr);
console.log(newList)

// print all oddnumbers in an array without using loop
function allOddNumbers(arr, i){
    
    if(arr[i] == undefined){
        return;
    }
    else if(!(arr[i] % 2 == 0)){
        console.log(arr[i]);
        i++;
        allOddNumbers(arr , i);
    }
    else{
        i++;
        allOddNumbers(arr, i);
    }
}
allOddNumbers([1,2,3,4,5,6,7,8,9,10,11,29] , 0);
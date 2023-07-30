// bubble Sort algorithem

function BubbleSort(arr){
    for(let i = arr.length-1; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

const res = BubbleSort([34,4,2,5,8,2,5,8,95,4])
console.log(res)
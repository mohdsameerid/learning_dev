
let count = document.querySelector(".count");
count.innerHTML = 0;


// //  Counter using addEventListener
// let incrementbtn = document.querySelector(".incre");
// incrementbtn.addEventListener("click", () => { // addEventListener
//     var countnum = document.querySelector(".count").innerHTML;
//     countnum++;
//     count.innerHTML = countnum;
// });
// let dcrementBtn = document.querySelector(".dcre");
// dcrementBtn.addEventListener("click", () => {
//     countnum = document.querySelector(".count").innerHTML;
//     countnum--;
//     count.innerHTML = countnum;
// });



// Counter using Normal Function 
var countnum;
function Increment(){
        countnum = document.querySelector(".count").innerHTML;
        countnum++;
        count.innerHTML = countnum;
}
function Dcrement(){
    if(countnum > 0){
        countnum = document.querySelector(".count").innerHTML;
        countnum--;
        count.innerHTML = countnum;
    }
}
function Reset(){
    countnum = document.querySelector(".count").innerHTML;
    countnum = 0;
    count.innerHTML = countnum;
    // console.log(countnum);
}
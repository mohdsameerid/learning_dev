
// let count = document.querySelector(".count");
// count.innerHTML = 0;

// var countnum;
// //  Counter using addEventListener
// let incrementbtn = document.querySelector(".incre");
// incrementbtn.addEventListener("click", () => { // addEventListener
//     countnum = document.querySelector(".count").innerHTML;
//     countnum++;
//     count.innerHTML = countnum;
// });
// let dcrementBtn = document.querySelector(".dcre");
// dcrementBtn.addEventListener("click", () => {
//     if(document.querySelector(".count").innerHTML > 0){
//        countnum = document.querySelector(".count").innerHTML;
//        countnum--;
//        count.innerHTML = countnum;
//     }
// });
// let resetBtn = document.querySelector(".reset");
// resetBtn.addEventListener("click", () => {
//     document.querySelector(".count").innerHTML = 0;
// });



// Counter using Normal Function 
// var countnum;
// function Increment(){
//         countnum = document.querySelector(".count").innerHTML;
//         countnum++;
//         count.innerHTML = countnum;
// }
// function Dcrement(){
//     if(countnum > 0){
//         countnum = document.querySelector(".count").innerHTML;
//         countnum--;
//         count.innerHTML = countnum;
//     }
// }
// function Reset(){
//     countnum = document.querySelector(".count").innerHTML;
//     countnum = 0;
//     count.innerHTML = countnum;
//     // console.log(countnum);
// }

let count = document.querySelector(".count");
count.innerHTML = 0;
let val;
function Increment(){
    val = document.querySelector(".count").innerHTML;
    val++;
    count.innerHTML = val;
}
function Dcrement(){
    val = document.querySelector(".count").innerHTML;
    if(val > 0){
        val--;
        count.innerHTML = val;
    }
}
function Reset(){
    count.innerHTML = 0;
}
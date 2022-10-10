
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

// let count = document.querySelector(".count");
// count.innerHTML = 0;
// let val;
// function Increment(){
//     val = document.querySelector(".count").innerHTML;
//     val++;
//     count.innerHTML = val;
// }
// function Dcrement(){
//     val = document.querySelector(".count").innerHTML;
//     if(val > 0){
//         val--;
//         count.innerHTML = val;
//     }
// }
// function Reset(){
//     count.innerHTML = 0;
// }



// counter with div tag
// let c = document.querySelector(".c");
// c.innerHTML = 0;
// let v;
// function p(){
//     v = document.querySelector(".c").innerHTML;
//     v++;
//     c.innerHTML = v;
//     console.log(v);
// }
// function m(){
//     v =  document.querySelector(".c").innerHTML;
//     if(v > 0){
//       v--;
//       c.innerHTML = v;
//     }
//     console.log(v);
// }
// let p = document.querySelector(".p");
// p.addEventListener("click", ()=>{
//     v = document.querySelector(".c").innerHTML;
//     v++;
//     c.innerHTML = v;
// });
// let m = document.querySelector(".m");
// m.addEventListener("click", ()=>{
//     v = document.querySelector(".c").innerHTML;
//     if(v > 0){
//         v--;
//     }

//     c.innerHTML = v;
// })

/////////////////////////////////////////////////////////////////////////////
let c = document.querySelector(".count");
c.innerHTML = 0;
let val;

// function Increment(){
//     val = document.querySelector(".count").innerHTML;
//     val++;
//     c.innerHTML = val;
//     console.log(val);
// }

// function Dcrement(){
//     val = document.querySelector(".count").innerHTML;
//     if(val > 0){
//         val--;
//         c.innerHTML = val;
//         console.log(val);
//     }
// }

function Reset(){
    // val = document.querySelector(".count").innerHTML;
    // val = 0;
    c.innerHTML = 0;
}


let p = document.querySelector(".incre");
p.addEventListener("click", ()=>{
    val = document.querySelector(".count").innerHTML;
    val++;
    c.innerHTML = val;
    console.log(val);
})

let m = document.querySelector(".dcre");
m.addEventListener("click", ()=>{
    val = document.querySelector(".count").innerHTML;
    if(val > 0){
        val--;
        c.innerHTML = val;
    } 
})
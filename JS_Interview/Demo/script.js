/////////////////////////// reverse a string in given below format //////////////////////////////
//  str - > My name is Samir -> yM eman si rimaS 
function reverseBySeparator(string, separator) {
    return string.split(separator).reverse().join(separator);
}

let str = "hello my name";
console.log(str);
let reverse = reverseBySeparator(str, "");
console.log(reverse);
let reverseby = reverseBySeparator(reverse, " ");
console.log(reverseby)


//  output -> hello my name ->  olleh ym eman
//hello my name -> h,e,l,l,o,,m,y,,n,a,m,e -> e,m,a,n,,y,m,,o,l,l,e,h -> eman ym olleh -> 
//  eman ym olleh -> eman,ym,olleh -> olleh,ym,eman -> olleh ym eman
// 
///////////////////////////// 1 way /////////////////////////////////////////////
Array.prototype.myMap = function (ghoda){
    let argumentsbanch = arguments;
    let inputBefore = this;
    let returnArr = [];
    
    for(let i = 0; i < inputBefore.length; i++){
        returnArr.push(ghoda(this[i], i , this))
    }
    return returnArr;
}



//////////////////////////////// 2 way ///////////////////////////////////////////
Array.prototype.myMap = function (callbackFn, thisArg) {
  let _this = this, 
      i = 0,
      newArr = [],
      callback = (thisArg !== undefined) ? callbackFn.bind(thisArg) : callbackFn;

  for (let e of _this) {
    if (e === undefined || e === null) {
      newArr.push(e);
      continue;
    }

    newArr.push(callback(e, i, _this))
    i++;
  }

  return newArr;
};


let arr = [1,2,3,4];
const res = arr.myMap(ele => (ele % 2 === 0) );
console.log(res)


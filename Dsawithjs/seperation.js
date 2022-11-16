// problem  -> Separation of String to vowels and consonents
 
// String = "Muhammad Samir"   (input) 
// consonents -> MhmmdSmr, vowels -> uaaai  (ouput)


function seperater(String){
    let consotents = "";
    let vowels = "";
    for(let items of String){
        // console.log(items)
        if((items == "a") || (items == "e") || (items == "i") || ( items == "o") || (items =="u")){
            vowels += items;
            // console.log(vowels)
        }
        else{
            consotents += items;
        }
    }
    console.log("Consonets: "+consotents);
    console.log("Vowels: "+vowels);
}
seperater("Muhammad Samir");
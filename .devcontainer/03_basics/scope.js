//two types of scope-
//   global scope
//   local scope or block scope
let num=98
{
    let num2=122
    console.log(num)                        //98
    console.log(num2);                      //122
}
//console.log(num2);    //ReferenceError: num2 is not defined

//same concept works in nested loops and condition
if(true){
    let one=90
    if(true){
        let two=56
        console.log(one)                //90
        console.log(two)                //56
    }
    //console.log(two);       //ReferenceError: two is not defined
}
 
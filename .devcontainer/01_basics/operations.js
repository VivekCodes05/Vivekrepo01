//console.log(2+2) (2-1)  (2*3) (2**3) i.e. 2 to the power of 3
console.log("hello" +" vivek") //hello vivek
console.log("1"+"1")    // 11
console.log("2" +1)      //21
console.log(2+"1")     //21

console.log(1+1+"2")    //22      consider the datatype which appers first => number  
console.log("2"+1+1)     // 211     and here first => string 

console.log(true)    //true
console.log(+true)     //1
console.log(+"")      //0 bcz empty string is considered as false
//console.log(true+)    //error
let x=3
let y=x++      //suffix increament means firstly assign x to y then increase x 
console.log(y,x)

let z=++x      //prefix increament means firstly increase x then assign x to z
console.log(z,x)
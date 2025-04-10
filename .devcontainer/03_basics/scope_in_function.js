//4 ways for function defining 
function first(num=3){
    console.log("first way ",num);
}
first(5)

let multiply=function mul(num1,num2){
    console.log(`second way ${num1}*${num2}`);
}                           //func name - mul() stored in variable - multiply
multiply(4,5)              //can't call  with mul(x,y) bcz mul() func is local to multiply variable so that can't be accessed
 
let three=(num1,num2)=>num1+num2
console.log(three(23,89))

function fourth(user="random"){
    console.log(`fourth way ${user}`);
}                                           //fun name- fourth()
let temp=fourth()                           //var name-temp
console.log(temp);

//+++++++++++++++++ intro to hoisting  +++++++++++++++++
console.log(one(6))
function one(num){                      //7
    return num+1
}

console.log(sum(2,3))               //ReferenceError: Cannot access 'sum' before initialization
let sum=function(num1,num2){
    return num1+num2
}


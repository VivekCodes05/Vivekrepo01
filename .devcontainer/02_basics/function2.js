//sometime we dont know about the no. of argument we will get exp. a cart can have 1 to n items
//      for this we have rest operator which groups function i/p argument in an array .now we can handle array using loops. etc 
function calculateCartPrice(...items){
    return items
}
console.log(calculateCartPrice(1,2,3,4));       //[ 1, 2, 3, 4 ]
console.log(calculateCartPrice(1));             //[ 1 ]
console.log(calculateCartPrice());              //[]

function calculateCartPrice(val1,val2,...items){
    return items
}
console.log(calculateCartPrice(12,34,67,4,3,2));   //val1=12 val2=34 items=[ 67, 4, 3, 2 ] 

//functions with objects as param
let myobj={
    username:"vivek",
    age:67
}
function userinfo(obj){
    return `username is ${obj.username} and age is ${obj.age}`
}
console.log(myobj);

console.log(userinfo({
    username:"india",
    age:"infinite"
}));

//function with array as param
function secondElement(arr){
    console.log(arr[1])
}
secondElement([89,23,45,67])
let myarr=[1,2,3,4,5]
secondElement(myarr)


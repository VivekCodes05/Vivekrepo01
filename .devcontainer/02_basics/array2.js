let arr=["a","b","c","d"]
let arr2=["india","russia"]
let arr3=new Array(1,2)
 arr.push(arr2)          //add arr2 as 4th element
console.log(arr)
console.log(arr[4][1])
//console.log(arr.concat(arr3))     //joins 2 array  but concat can join only 2 at a time

const a = [1, 2];
const b = [3, 4];               
const combined = [...a, ...b]       //spread operator(...x,...y,...z)-used to combine arrays
//console.log(combined)                      //spread is preferred over concat bcz it can join more than 2 at a time

const another_arr=[1,2,["vivek","d",[6,7]],"aryan"]
console.log(another_arr.flat(Infinity))                   //flat(depth) method used to return new array with all subarray elements to specified depth 

//converting strings,object to array
const  name="aryan"
console.log(Array.from(name))

console.log(Array.from({1:"india"}))  //it returns empty array
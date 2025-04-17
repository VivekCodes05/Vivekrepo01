let arr=[1,2,3,4,5]
for (const item of arr) {
//console.log(item);
}
let map=new Map()
map.set("IN","India")
map.set("US","USA")
map.set("USSR","Russia")
//console.log(map);
for (const element of map) {        //iterator of map returns array of key-value pair
console.log(element);
}
for (const [x,y] of map) {          //we can fetch array of key-value pair as an iterator
    console.log(`key of the map is :${x}`);    
}
console.log(map.keys());
console.log(map.values());

//for-of loop is not available for iterating an object
myobj={first:"vivek",
    second:67890,
    third:"ishant"
}
// for (const item of myobj) {    //TypeError: myobj is not iterable
//     console.log(element); 
// }

//for-in loop is used to iterate over object and  iterator returns the key of the object
for (const item in myobj) {
    console.log(`${item} is the key of value ${myobj[item]}`);    
    }

//for-in loop in array and iterator returns the index 
for (const item in arr) {
   console.log(`index is ${item} and element is ${arr[item]}`);
   
    }

//for-in loop in map  
for (const item of map) {
    console.log(item);      //map is not iterative still prints nothing and no error
}    








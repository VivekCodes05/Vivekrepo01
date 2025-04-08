//two ways to define a object
//let obj1=new Object()  //this is singelton object using constructor
//let obj2={a:1,bb:7} 
let myobj={
    name:"vivek",
    userId:{
        userlastname:"thakur",
        userage:21,
        userplace:{
            city:"bulandshahr",
            house:{
                houseNo:123
            }
        
        }
    }
} 
console.log(myobj.userId)
console.log(myobj.userId.userplace.house)

//joining two objects   - two ways
let obj1={1:"a",2:"b"}
let obj2={x:"india",y:"bsr"}
let combined={obj1,obj2}
console.log(combined);       //it will not combine them in a single object ,same problem as in array joining 

console.log(Object.assign(obj1,obj2));    //assign(target,source) method of Object constructor copies one or more source objects to target obj and returns and update original target object
console.log(obj1);                       //check if obj1 is changed or not
console.log(Object.assign({},obj1,obj2));  //now this empty object is working as target i.e.obj1 will be unchange

let obj3={...obj1,...obj2}
console.log(obj3);

//we can have array of objects -array having objects as elements
let arr=[{1:"abc"},{},{},{x:"india"}]
console.log(arr[0][1])
console.log(arr[3].x);       //can access the objects attri using dot notation on that element

//print keys,values,entries as an array
let myobj2={1:"fghjk",2:"kjhg",name:"india"
}
console.log(Object.keys(myobj2))     //return array of keys
console.log(Object.values(myobj2))     //retrun array of values
console.log(Object.entries(myobj2))         //return key value pairs as array of array

console.log(Object.hasOwn(myobj2,1))            //hasOwn() method of Object constructor i.e. it's a static method returns boolean whether specified obj has specified property or not
console.log(Object.hasOwn(myobj2,["name"]))
console.log(myobj2.hasOwnProperty(1))               //hasOwnProperty() method alse dosame





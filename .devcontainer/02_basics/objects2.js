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

console.log(Object.assign(obj1,obj2));    //assign(target,source) method of Object constructor copies one or more objects to first param obj and returns target single object
console.log(obj1);                       //check if obj1 is changed or not
console.log(Object.assign({},obj1,obj2));  //now this empty object is working as target


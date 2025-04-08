let mySym=Symbol("sym1")
const obj1={                //all the keys are stored internally as a string i.e "name","age"
    name : "vivek",
    age:45,                     
    "city":"bsr",
    [mySym]:"mysym1",          //[mySym] is a symbol that must be defined earlier bfr using in obj
    IsLogin : false    
}
//two ways to print a key value
console.log(obj1.name);
console.log(obj1["name"]);  
 
console.log(obj1.city);
console.log(obj1["city"]);

console.log(obj1.mySym);       //this is just taking this key as simple key variable not as a Symbol & to
                                        //run this line , remove sq. brcaket off [mySym] key in obj1 definition
console.log(obj1[mySym]);           //this is working as proper Symbol
//console.log(obj1);       //run this to check Symbol 

//update the value of a key
obj1.name="india"
console.log(obj1["name"]);

//fix the object attributes and value
//Object.freeze(obj1)             //freeze() method of object- Prevents the modification of existing property attributes and values, and prevents the addition of new properties
obj1.age=100
//console.log(obj1);

//having a function as attribute in the obj
obj1.myfunc=function() {
    console.log("hello sir")
}
console.log(obj1.myfunc())

obj1.myfunc2=function(){
    console.log(`access other attributes by a function ${this.city}`)  //"this" used to access same obj attributes
}
console.log(obj1.myfunc2())



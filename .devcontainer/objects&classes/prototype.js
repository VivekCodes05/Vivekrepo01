//javascript never gives up,in finding something till it find a null
//in js,everything is an object,even functions,arrays are objects
// What is a Prototype?
// In JavaScript, every object has a hidden property called [[Prototype]] (accessible via __proto__ in most environments).
// This prototype is another object from which it can inherit properties and methods.
// This forms a prototype chain — if a property/method isn’t found on the object, JavaScript looks at its prototype, then the prototype’s prototype, and so on, until it reaches null.
const car1={
    brand:"Toyota",
    start:function(){
        console.log(`${this.brand} started`);
    }
}
const car2={
    brand:"Honda"
}
//console.log(car2.start());  //error : car2.start is not a function
car2.__proto__=car1; //setting car1 as prototype/father of car2 i.e. car2 inherits properties and methods from car1
car2.start();  //Honda started   reason for why not "toyota started" is because of the
//this binding rule
//In JavaScript, this is determined at the time of call,so when car2 search for start and not found it 
//it search in car1 and found it but the calling is done by car2 so this will be bound to car2

//whenever same property is defined in both prototype(father) and object(son), the object property will be used
car2.start=function(){
    console.log(`${this.brand} started from car2`);
}
car2.start();  //Honda started from car2    


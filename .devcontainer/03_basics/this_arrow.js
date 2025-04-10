let obj={
    username:"vivek",
    id:897,
    fun:function() {
        console.log(`${this.username}, is the name`)     //"this" is used to access internal keys
        console.log(this);                     //prints present obj context - { username: 'vivek', id: 897, fun: [Function: fun] }
        
    }
}
obj.fun()
obj.username="vansh"
obj.fun()

console.log(this);                  //prints empty object 

function thisInFunc(){
        let brand="AUDI"
        //console.log(this);     //prints too much internal data about function
        console.log(this.brand);     //print undefined
}
thisInFunc()

let ArrowFunc=()=>{
    let paint="red"
    console.log(this.paint);
    console.log(this);                      //print undefined
    
}
ArrowFunc()

//++++++++++++++++++Arrow Function -two types++++++++++++++++
let explicitArrow=(num1,num2)=>{
    return num1+num2                            //if {} used then "return" keyword is required
}

let implicitArrow=(num1,num2)=>(num1+num2)      //if {} not used and either () is used or nothing is used then "return" not to be used 
 
//if we have to return a object from arrow function
let exp=()=>({username:"india"})             //we have to wrap object in {} to return
console.log(exp());


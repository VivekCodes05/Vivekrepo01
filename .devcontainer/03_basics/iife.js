//IIFE - Immediately Invoked Function Expressions
//      # Execute function immediately
//      # Create a private block (before let and const existed)
(function fun(){               //it's optional to use a func name and if function name is used in iife it is called "named IIFE"
    console.log("this is iife show")
})(); //() just works as function call

(function(){
    console.log("requirement of semicolon");   //it is good to use semicolon before and after iife
                                                //so that expressions before iife donot consider iife as their continuous expressions 
                                                // bcz of ()()
                                                //similarly after semicolon is advised to end the iife statement
    
})();

//arrow function with iife
(()=>{
    console.log("this is iife with arrow")
})();

//with param
((name)=>{
    console.log(`my name is ${name}`)
})("vivek");

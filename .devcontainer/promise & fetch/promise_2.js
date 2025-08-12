//resolve and reject can be handled by two methods:
     //1. then() and catch()
     //2. async and await
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error =true;
        if(!error){
            resolve({carname:"Scorpio",Brand:"mahindra"});
        }else{
            reject("Error: automobile  went wrong");
        }},1000);
    })
async function getCar(){
    //await promiseFive    //this will wait for the promiseFive to resolve or reject and hold whatever is returned by it
    //so we need to store it in a variable
    const car=await promiseFive;
    console.log("Car is ",car);
}
getCar();//we need to call the async function to execute it
//this will only work if the promiseFive is resolved, if it is rejected then it will throw an error without handling it

//there is a requirement that we need to handle the error in async function using try and catch block ,shown below
async function getCarWithErrorHandling(){
    try{
        const response=await promiseFive;
        console.log("Car is ",response);
    }catch(err){
        console.log(err);
    }
}

//Which is advised?
//For complex flows with multiple awaits → ✅ Async/Await (clearer logic, fewer nested callbacks).

// For quick, single promise chains → ✅ .then().catch() (less boilerplate).

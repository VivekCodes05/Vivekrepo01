// const promiseOne=new Promise(function(resolve,reject){
//     console.log("Promise One is created");
//     resolve();
// });
// promiseOne.then(function(){     // This function runs when the promise is resolved but only if promise and 
//                                  // then are connected whuch requires resolve() to be called.
//      console.log("Promise One is resolved");
// });

// //below code shows how is it actually coded
// new Promise(function(resolve,reject){
//     console.log("Promise two is created");
//     resolve();
//   }).then(function(){
//     console.log("Promise two is resolved");
//   });
//   //output till now is :  Promise One is created
//                         //Promise two is created
//                         //Promise One is resolved
//                         //Promise two is resolved
// //.then() is a method that is used to handle the result of a promise once it has been resolved or rejected.
// //it follows asynchronous behavior means if no timer is set then it will run after the current code block is executed.

// //in below code we see that we can pass argument to the resolve function and it will be available in the .then() method.
// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(()=>resolve({username:"vivek",No:27}),1000);
// });
// promiseThree.then(function(data){
//     console.log("Promise Three is resolved with data",data);
// })

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error =false;
        if(!error){
            resolve({username:"Ishant",No:28});
        }else{
            reject("Error: Something went wrong");
        }},1000);
    })
    promiseFour.then((user)=>{
        console.log("user is ",user);
        return user;
    }).then((username)=>{
        console.log("Username is",username);
    }).catch((err)=>{
        console.log(err);
    }).finally(()=>console.log("Promise is settled either resolved or rejected"))
    



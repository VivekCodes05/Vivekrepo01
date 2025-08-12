async function getAll(){
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    //console.log(response) //fetch() returns a promise, but it is in pending state i.e. it has not yet resolved or rejected
                            //to get the data we need to wait for the promise to resolve; so we use await
    const data =await response.json()//fetch() and .json() both are an async function and always return a promise
                                       //so we need to await it or use .then()
    console.log(data) 
}
getAll();

//as this can throw an error, we should use try-catch block
async function getAllWithErrorHandling(){
    try {
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        const data =await response.json()
        console.log(data);
    } catch (error) {
        console.log("Error : ",error);
    }
}
getAllWithErrorHandling();

//we can also do the same thing using .then() and .catch()
function getAllWithThen(){
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{return res.json()})
    .then((data)=>console.log(data))
    .catch((error)=>console.log("Error : ",error));     
}
getAllWithThen();
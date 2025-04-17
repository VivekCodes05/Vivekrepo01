let arr=["x","y","z"]
//for-each loop in array 
arr.forEach((item) => {         //for-each loop works as a call back function with arrow notation
    console.log(item); 
});

arr.forEach((i,index,arr)=>{
    console.log(i,index,arr);
    
})

//for each loop in array of objects
let myarr=[{
    name:"vivek",
    age:21
},
{
    name:"ishant",
    age:23
},
{
    name:"rahul",
    age:25
}]
myarr.forEach(item => {
    console.log(item.name);     //item is fetching each object so we will use dot notation to access object attri
    
});

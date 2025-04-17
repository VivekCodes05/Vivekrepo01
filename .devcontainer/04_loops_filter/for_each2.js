let arr=["javascript","java","python","html"]
let name=arr.forEach((x)=>{
    return x
})
console.log(name);   //print undefined bcz for each loop doesn't return anything


//filter 
let nums=[1,2,3,4,5,6,7,8,9]
let temp=nums.filter((item)=>item>4)     //Returns the elements of an array that meet the condition specified in a callback function.  
//                               in call back func of filter, every element is accessed and checked with the condition ,if satisfy then return that element 
//                       we know if we use {} after arrow then we need to explicitly write return keyword,otherwise it will not return  
console.log(temp);


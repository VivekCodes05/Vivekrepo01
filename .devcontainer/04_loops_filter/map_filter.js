let arr=["javascript","java","python","html"]
let name=arr.forEach((x)=>{
    return x
})
console.log(name);   //print undefined bcz for each loop doesn't return anything


//filter 
//Purpose: Selects elements based on a condition.
//Returns: A new array with only the elements that satisfy the condition.
//Use case: When you want to remove some elements from an array based on a test
let nums=[1,2,3,4,5,6,7,8,9]
let temp=nums.filter((item)=>item>4)     //Returns the elements of an array that meet the condition specified in a callback function.  
//                               in call back func of filter, every element is accessed and checked with the condition ,if satisfy then return that element 
//                       we know if we use {} after arrow then we need to explicitly write return keyword,otherwise it will not return  
console.log(temp);

//map method of array-
//Purpose: Transforms each element in the array.
//Returns: A new array with the same length, where each element is modified.
//Use case: When you want to change every element in the array.
temp=nums.map((item)=>item+10)
console.log(temp);

let mapi=nums.map((item)=>{if(item>4){    //also ternary operator can be used
    return item+10
}
else{return item}})
console.log(mapi);

//map and filter can be used in chain
let myarr=[10,20,30,40,50]
chainn=myarr.map((item)=>item*10)
            .map((item)=>item-1)
            .filter((item)=>item>=299)
console.log(chainn);




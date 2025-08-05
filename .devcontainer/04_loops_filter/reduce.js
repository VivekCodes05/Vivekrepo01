//reduce method of array-
//
let nums=[1,2,3,4]
let sumofnums=nums.reduce((acc,currval)=>{console.log(`acc: ${acc} and  currentvalur: ${currval}`);
 return acc+currval},40)    //40 is given as initial value which will be taken as accumu. in the first iteration only
                            //if nothing is provided as initial then first element will be taken as accum. and iteration start from sec element
 console.log(sumofnums);

 //above is detailed to get understand although we should do-
 let sumof=nums.reduce((acc,currval)=>acc+currval,90)
 console.log(sumof);

 //usecase  of reduce -
 const products = [
    { productName: "Wireless Mouse", price: 799 },
    { productName: "Mechanical Keyboard", price: 2499 },
    { productName: "USB-C Charger", price: 1199 }
  ];
let totalprice=products.reduce((acc,item)=>acc+item.price,0  )
console.log(`cart value is : ${totalprice}`);

 

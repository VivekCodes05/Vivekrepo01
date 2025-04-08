let num=[1,2,3,4,5,"india"]
let num2=new Array(1,3,5,7,9)
console.log(num[2])
console.log(num2[3])
console.log(num.at(4))
num.push(34)
num.pop()
console.log(num.shift())  //shift() removes first elemnet from array
num2.unshift(9)         //unshift(item) add this item into starting of array and shift whole array
console.log(num2)
let num3=[1,7,4,2,9]
console.log(num3.includes(78))
console.log(num3.indexOf(5,3))     //first param is the element to search and second is the index to begin the search
console.log(num3.join())            //convert array into string with comma as default separator
console.log(num3.join(":"))
console.log(num3.slice(0,-3))             //returns subarray from given index and accept -ve indexing 
console.log(num3.splice(2,2))                    //frist param-index to start   & sec paramr-no. of elements to remove 
                                               //return an array of deleted items
console.log("A",num3)               //"A" -title of the array                                              
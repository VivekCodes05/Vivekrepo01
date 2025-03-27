//all the primitive data types variabl store in stack memory
//all non-premetive type i.e. reference variables store in heap memory.
// A variable of primitive data type get a copy of the data not exact parent location data
//  it means changes made by new variable will not effect original data
let num1=89
let num2=num1
num2=78
console.log(num1)   //89
console.log(num2)   //78

let obj1={
    id:1,
    age:78             //obj1 vaiable data stored in heap & obj1 is pointing 
}
let obj2=obj1         //with this line obj2 is referencing to original data i.e.obj2 is also the controller
                            //of this data
obj2.id=8             //changes made by obj2 in original ,,,also changes for obj1
console.log(obj1.id)
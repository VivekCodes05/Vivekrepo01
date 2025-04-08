const obj={
    myName:"vivek",
    myCompanyName:"hcl"
}
console.log(obj.myCompanyName)     //it's very hectic to repeatedly use dot notation to access so we destructure our object
let {myCompanyName}=obj              //we extracted obj.myCompanyName from obj and assigned it to a variable with same name
                                            //it means myCompanyName=obj.myCompanyName and  myCompanyName is a normal variable
console.log(myCompanyName);

let{myName:name}=obj                //here variable name=obj.myName  i.e.aliasing
console.log(name);

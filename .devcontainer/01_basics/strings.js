let name="india"
let name2="bharat"
// console.log(name+name2)
let temp=new String("hello")
const exp=new String("world")

//there are few methods for variable of string like name,name2 but
//  more methods are there for object of string like temp,exp
//console.log(`hello everyone my name is ${temp.charAt(2)} and saying hello to the ${exp.slice(1,4)}`);
//console.log(`hello ${temp.length}`)
const substr=temp.substring(0,3)
//console.log(substr)
console.log(temp.substring(-4,4))    //substring() method do not use -ve index ,it ignore -ve index and 
                                        //take default as 0 
console.log(temp.slice(-4,4))       //slice() method can work with -ve index

// *trim() method -The trim() method of String values removes whitespace from both ends of this string 
// and returns a new string, without modifying the original string.

//To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().
const newstr="     hello     "
console.log(newstr+"india")
console.log(newstr.trim()+"india")
console.log(newstr.trimStart()+"india")

//split(separator,limit) - The split() method of String values takes a pattern and 
      // divides this string into an ordered list of substrings by searching for the pattern,
      //  puts these substrings into an array, and returns the array.
let url="https:// vivek kumar it a"      
let url2=url.split(" ")
console.log(url2)


// replace(pattern,replacement) method
console.log(url.replace("vi","v"))
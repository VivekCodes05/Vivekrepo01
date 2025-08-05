let date=new Date()
console.log(date.toLocaleTimeString());
console.log(date.toLocaleDateString())
console.log(date)
console.log(date.toString())
console.log(date.toISOString())
console.log(date.toJSON())
console.log(date.toLocaleDateString())
console.log(date.toLocaleString())
console.log(date.toDateString())

let newDate=new Date(2023,0,20)     //months start from 0
console.log(newDate.toDateString())
newDate="2023-12-15"     //this is normal month numbering 1 to 12
console.log(newDate)
let mytimestamp=Date.now()
console.log(mytimestamp)
console.log(date.getTime())    //gives the time in milisec from jan 1 1970 to now

//convert milisec to sec
let otherdate=new Date()
 console.log(Math.floor(otherdate.getTime()/1000))   //floor is additional just to remove decimal values

 //customized using parameters of method toLocaleString()
 console.log(otherdate.toLocaleString('default',{
    weekday : "long"
 }))
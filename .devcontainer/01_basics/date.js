let date=new Date()
console.log(date)
console.log(date.toString())
console.log(date.toISOString())
console.log(date.toJSON())
console.log(date.toLocaleDateString())
console.log(date.toLocaleString())
console.log(date.toDateString())

let newDate=new Date(2023,0,20)     //months start from 0
console.log(newDate.toDateString())
newDate="2023-12-15"
console.log(newDate)
let mytimestamp=Date.now()
console.log(mytimestamp)
//console.log(newDate.getTime())

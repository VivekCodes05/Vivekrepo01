function sum(num1,num2){
    console.log(num1+num2 );
}
//let ans=(sum(1,null))            
//console.log(ans)                //ans not getting any value i.e. sum() not returning any value

function user(username){
    if (!username) {             // ! makes next to it, statement opposite so if nothing is passed as arg it means
                                //     username param is empty i.e.false so ! will make true so if condition satisfied and will run
        return "please enter username"
    }
    return `${username} just  logged in`
}
console.log(  user()     //if nothing is oassed as argument it means parameter username has nothing assigned
                                //so "udefined just logged in " will be printed
);

//use of passed default param
function fun(num=23){     //23 will be used as default 
    console.log(`${num} is passed number`)
}
fun(76)      //o/p - 76 is passed number
fun()        //o/p - 23 is passed number


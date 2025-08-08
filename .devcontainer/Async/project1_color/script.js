function hexGenerator(){
    let hex="0123456789abcdef";
    let color="#";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
        }
    return color;
    }
function changeBackgroundColor() {
        document.body.style.backgroundColor = hexGenerator();
    }
let intervalId;
document.querySelector("#start").addEventListener("click",()=>{
    intervalId=setInterval(changeBackgroundColor, 1000);
    const name=document.createElement("h1");
    name.id="name";
    name.innerHTML="color changing every second";
    document.body.appendChild(name);

})
document.querySelector("#stop").addEventListener("click",()=>{
    clearInterval(intervalId);
    document.querySelector("#name").remove();
    console.log("Stopping the color change");

})

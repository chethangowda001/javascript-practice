document.getElementById("box-1").innerText="updated box1";


function myfunction(){
    console.log("i was clicked");
}

function MyMouse() {
    console.log("i was overed");
}

function keyPress() {
    console.log("key was pressed");
}

function keyup(){
    console.log("key up was presssed");
}

function keydown(){
    console.log("key down was presssed");
}


const box1 = document.getElementById("box-1");
box1.addEventListener("click",(e)=>{
    console.log("event object");
})
 
const container = document.getElementById("container");
container.addEventListener("click",(e)=>{
    console.log("i am container click");

},false)

// box1.addEventListener("mousemove",(e)=>{
//     console.log("event object",e.clientX,e.clientY);
// })

// box1.addEventListener("click",()=>{
//     console.log("click by event");
// })

// box1.addEventListener("click",()=>{
//     console.log("click by event");
// })

const input = document.getElementById("text");
input.addEventListener("keydown",(e)=>{
    console.log("key",e.key);
})

input.addEventListener("focus",(e)=>{
    console.log("key",e);
})
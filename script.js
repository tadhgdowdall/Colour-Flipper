// eventListener = Listen for specific events to create interactive web pages
//                             events: click, mouseover, mouseout
//                             .addEventListener(event, callback);




//const myBox = document.getElementById("box");

/*function changeColor(event) {
    event.target.style.backgroundColor = "green";
    event.target.textContent = "Ouch"

} */


/* 
myBox.addEventListener("click", function(event){
    event.target.style.backgroundColor = "green";
    event.target.textContent = "Ouch"
}) 

*/

// Same as above but uses an arrow function 
/*
myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "green";
    event.target.textContent = "Ouch"
}) 

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "purple";
    event.target.textContent = "Yooo Bro !"
})

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "aqua";
    event.target.textContent = "Ouch"
})

const myButton = document.getElementById("button");
let count = 0;


myButton.addEventListener("click", event =>{
    myBox.textContent = "count";
}) */


const myButton = document.getElementById("colorFlipper");


function changeColor(){
    let red = Math.floor(Math.random() * 256); 
    let green = Math.floor(Math.random() * 256); 
    let blue = Math.floor(Math.random() * 256); 
    let color = "rgb(" + red + "," + green + "," + blue + ")";
    document.getElementById("body").style.backgroundColor = color; 
}

myButton.addEventListener("click", event =>{
    changeColor();
    
})
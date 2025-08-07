

/*1.Easy Way: window prompt 
let username = window.prompt("What's your username?");
*/

//2.Professional:Html textbox
let username;
document.getElementById("mySubmit").oneclick = function(){
    username = document.getElementById("myText").value;
    console.log(username)    
}
console.log("Hello");
let username1;
document.getElementById("mySubmit1").oneclick = function(){
    username1 = document.getElementById("myText1").value;
    console.log(username1)    
}
console.log("Hello World");



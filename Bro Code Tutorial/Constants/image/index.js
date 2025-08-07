

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
 


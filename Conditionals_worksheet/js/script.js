//Devin Ingles 12/07/14 Conditionals_Worksheet - Multiple Results - Check the Login

var userName = "Bananaiscool";
var userInput = prompt("Please log in with your Username");
var password = "Pa55word";
var passwordInput = prompt("Please enter in your password");

if(userInput == userName){
    if(passwordInput == password){
        console.log("Welcome, " + userName + "!");
    }else{
        console.log("Password dose not match our records.");
   }
}else{
    console.log("User not found. Try again.");
}   
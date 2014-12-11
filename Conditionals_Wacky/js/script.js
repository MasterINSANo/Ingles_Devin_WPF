//Devin Ingles 12/08/2014 Conditionals_Wacky

var job = prompt("Where do you work?"); //not needed to make decision, but to produce output.
var hourly = prompt(" How much do you make an Hour?\n (Rounded Up)"); //not needed to make decision, but to produce output.
var raise = prompt("How many years have you been at your job?"); //needed to make a Ternary
//You will receive a raise if you have worked for the company for 2 years or more. You will not receive a raise if you have worked less then 2 years.
raiseMade = (raise >= 2) ? "Congratulations, you get a raise!" : "Unfortunately, you have not worked at the company long enough for a raise.";
console.log(raiseMade); //Printed out to console true or False answer

if(raise >= 2){
    alert("Because you have worked for " + job + " for " + raise + " years, you get a $1 raise added to your $" + hourly + " an hour.");
}else{
    alert("You have only been with " + job + " for less then 2 years, I am sorry, but you do not receive a raise.");
}
//added an alert to inform that the input is getting a raise or not getting a raise.
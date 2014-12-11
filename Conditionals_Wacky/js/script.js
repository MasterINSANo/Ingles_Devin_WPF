//Devin Ingles 12/08/2014 Conditionals_Wacky

var job = prompt("Where do you work?");
var hourly = prompt(" How much do you make an Hour?");
var raise = prompt("How many years have you been at your job?");

raiseMade = (raise >= 2) ? "Congratulations, you get a raise!" : "Unfortunately, you have not worked at the company long enough for a raise.";
console.log(raiseMade);

if(raise >= 2){
    alert("Because you have worked for " + job + " for " + raise + " years, you get a $1 raise added to your $" + hourly + " an hour for a total of $" + hourly + 1 + ".");
}else{
    alert("You have only been with " + job + " for less then 2 years, I am sorry, but you do not receive a raise.");
}
// Devin Ingles 12/17/14 Functions_Personal

//What time should you lay your baby down for bed.

var naps = prompt("How many naps did your baby take during the day?");
console.log(naps + " Nap(s).");
var napLength = prompt("What is the average time your baby slept in minutes, per nap?");
console.log("My baby slept an average of " + napLength + " Minutes per nap.");
var time;

time = (naps >= 3 || napLength >= 60) ? "The Best time to put the baby to bed would be 9PM" : "You should lay them down to sleep at 8pm.";
console.log(time);



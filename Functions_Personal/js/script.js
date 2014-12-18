// Devin Ingles 12/17/14 Functions_Personal

//What time should you lay your baby down for bed.

var naps = prompt("How many naps did your baby take during the day?"); //Adding user input to determine the best time to lay baby down to sleep at night.
console.log(naps + " Nap(s).");
var napLength = prompt("What is the average time your baby slept in minutes, per nap?"); //seeing how long the baby sleeps through naps, determines if they would be able to sleep at 8 or 9pm.
console.log("My baby slept an average of " + napLength + " Minutes per nap.");
var time; //Setting up for a ternary
//If your baby sleeps for 3 or more naps a day, a later time to send them to bed is preferred. Or even if you lay them down for a single nap, and they sleep longer 60 minutes or more, then 9pm would be a good time to lay them down. Otherwise they will be tired and you can lay them down at 8pm.
time = (naps >= 3 || napLength >= 60) ? "The Best time to put the baby to bed would be 9PM" : "You should lay them down to sleep at 8pm."; //added a logical operator to decide one or the other.
console.log(time); //printing answer to console.log



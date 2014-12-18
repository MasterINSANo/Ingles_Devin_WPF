//Devin Ingles 12/17/14 Functions_Wacky

//I figured since we dealt with the console this month, I would make a wacky assignment called Console Quest.
console.log("-------------Console Quest-------------");

alert("It is a cold a stormy night.\nYou are walking in the darkness until you stumble across a legendary sword called Excalibur.");
var sword = prompt("It is wedged into a massive stone, Do you try to pull out the sword?\n(Yes or No)");
// We start our quest finding a rare item, what shall you do?
if(sword === "Yes"){
    console.log("You are asked a question involving math, and your life!");
}else if(sword === "No"){
    console.log("You are ambushed by Robot Dinosaurs!\n Run for your life!!!");
}else{
    console.log("You decide to keep walking, magical things can be dangerous!");
}//if you pull the sword out from the stone, you are asked a riddle. If not you are attacked! Or you could just ignore the sword all together and play it safe.

if(sword === "Yes"){
    math = prompt("If 5*5 is 25, what would be the opposite of 25*25?");
    console.log("The Correct answer is 1!\nThe opposite of 25*25 is 25/25, with the answer being 1!");
}else if(sword === "No"){
    console.log("A Robot Dinosaur cuts off your escape and then leaps toward you with mouth wide open, growling, with teeth sharp as a knife!\nYou are caught and you die, Game Over.");
}else{
    console.log("You think out loud to yourself, Did I remember to shut off the stove?\nAs you continue down your dark path. Game Over");
}//if you pulled the sword out, you must answer this riddle. If you looked at the sword and didn't pull it

if(math === "1"){
    console.log("You Win!!!");
}else if(math >= "2"){
    console.log("Incorrect answer, the stone blows up and kills you. Game Over.");
}else{
    console.log("Please buy the DLC to Console Quest Called,\nThe Next Quest to continue.");
}
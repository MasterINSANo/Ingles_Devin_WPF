//Devin Ingles 12/17/14 Functions_Wacky

console.log("-------------Console Quest-------------");

alert("It is a cold a stormy night. You are walking in the darkness until you stumble across a legendary sword called Excalibur.");
var sword = prompt("It is wedged into a massive stone, Do you try to pull out the sword?(Yes or No)");

if(sword === "Yes"){
    console.log("You are asked a question involving math, and your life!");
}else if(sword === "No"){
    console.log("You are ambushed by Robot Dinosaurs!\n Run for your life!!!");
}else{
    console.log("You decide to keep walking, magical things can be dangerous!");
}

if(sword === "Yes"){
    math = prompt("If 5*5 is 25, what would be the opposite of 25*25?");
    console.log("The Correct answer is 1! The opposite of 25*25 is 25/25, with the answer being 1!");
}else if(sword === "No"){
    console.log("A Robot Dinosaur cuts off your escape and then leaps toward you with mouth wide open, growling, with teeth sharp as a knife! You are caught and you die, Game Over.");
}else{
    console.log("You think out loud to yourself, Did I remember to shut off the stove? As you continue down your dark path. Game Over");
}

if(math === "1"){
    console.log("You Win!!!");
}else if(math >= "2"){
    console.log("Incorrect answer, the stone blows up and kills you. Game Over.");
}else{
    console.log("Please buy the DLC to Console Quest Called, The Next Quest to continue.");
}



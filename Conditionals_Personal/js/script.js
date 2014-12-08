//Devin Ingles 12/08/2014 Conditionals_Personal

//Good grades get us places!

var grade = prompt("What is your final grade at the end of the year?"); //I am wanting to know what grade they received at the end of the year.
var reward = prompt("Where would you like to go as a reward for getting good grades?"); //I want to see where they want to go so that they can be rewarded for doing good in school.

//If your grade is equal to or greater then 70%, then you get to go to your reward.
if (grade >= 70){
        console.log("Congratulations! You can go to " + reward + "!");
}else{
    console.log("Sorry, but because you got a " + grade + "%, you cannot go to " + reward + ".");
    }
// if you received a grade below 70%, you cannot go to your reward.
//Devin Ingles 12/08/2014 Conditionals_Personal

var grade = prompt("What is your ending grade?");
var reward = prompt("Where would you like to go?");
var behavior = prompt("Where you Good or Bad in school?")

if (grade >= 70){
    if(behavior === "Good" || behavior === "good"){
        console.log("Congratulations! You can go to " + reward + ".");
    }else{
    console.log("Sorry, but because you got a " + grade + "%, you cannot go to " + reward + ".");
    }
//Devin Ingles 12/08/2014 Conditionals_Personal

var grade = prompt("What is your ending grade?");
var reward = prompt("Where would you like to go?");

if(grade >= 70){
    console.log("Congratulations! You can go to " + reward + ".");
}else{
    console.log("Sorry, but because you got a " + grade + ", you cannot go to " + reward + ".")
}
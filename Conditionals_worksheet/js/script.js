//Devin Ingles 12/07/14 Conditionals_Worksheet - Expressions with Conditionals - Celsius to Fahrenheit converter

var number = prompt("Please enter in the temperature.")
//the numerical value of the temperature
var unit = prompt("What is the Unit you would like to convert to:\n F for Fahrenheit or C for Celsius.");
//the temperature unit
if(unit == "C" || unit == "c"){
    number = (number - 32) * 5 / 9;
//if they enter a lower case or upper case C, it will still find the answer converting to Celsius
}else{
    number = number * 9 / 5 + 32;
//if they were to enter in a lower or upper case F it will still convert to F.
}
console.log("The temperature out side is " + number + " degrees " + unit + ".");
//even if they hit the wrong letter (other then C), it will automatically convert to Fahrenheit.
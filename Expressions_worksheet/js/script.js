//Expression Worksheet

//Slice of Pie Part 1

var slice = prompt("how many slices of pizza per box?"); //enter in how many slices are in the box
var people = prompt("how many people are at the party?"); //tell how many people were at the party
var order = prompt("how many pizza's were ordered?"); //how many pizzas were ordered

var total = slice * order / people; //total of slices per person

alert("Each person ate " + total + " slices of pizza at the party");
console.log(total);
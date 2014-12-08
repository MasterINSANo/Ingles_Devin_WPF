//Devin Ingles 12/07/14 Conditionals_Worksheet - Multiple Conditions - Movie Ticket Price

var ticketPrice = 12;
var discountPrice = 7;
var  age = prompt("How old is the customer?");
var time = prompt("What time is it?");
//if the age is equal to or less then 10, or equal to or greater then 55 or if they watch between 3 and 5, they get the $7 discount.
if(age <= 10 || age >= 55 || time >= 3 && time <= 5){
    console.log("Your ticket price is $" + discountPrice + ".");
}else{
    console.log("Your ticket price is $" + ticketPrice + ".");
}
//If they do not meet the required statements above, the ticket price is $12.

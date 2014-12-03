//Devin Ingles 12/03/2014 Expressions_Industry

//How much commission I would make if I made 8% of my total.

alert("How much commission would I make if I made 8% of my total of, \n $300, $150, $129.99 and $129.99 ?")

var smartPhone = 300; //How much profit made on selling a Smart Phone

var basicPhone = 150; //How much profit made on selling a basic phone

var insurance = 129.99; //if both phones bought insurance full profit of 129.99

var total = smartPhone + basicPhone + insurance * 2; //Both phones adding insurance, then adding total together

console.log("I made a total of $" + total + "."); //Printing my work on console to double check total

var commission = total * .08; //taking the total and multiplying by .08 to get answer

alert("I have made a total of $" + commission + " in commission."); //the correct answer for original question

console.log("I have made a total of $" + commission + " in commission."); //printed on console to check work.

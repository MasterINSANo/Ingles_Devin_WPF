//Devin Ingles - 12/02/2014 - Expressions_Personal

//Average tips per night, working as Pizza Delivery
//I am using my last two weeks as basis for tips earned

var tips = [37, 160, 163, 159]; //I work 2 nights a week

var total = tips[0] + tips[1] + tips[2] + tips[3]; //taking the 4 nights in the last two weeks

var avg = total / 4; //taking the total and dividing by 4

console.log(avg);

alert("I make on average $129.75 in tips working four nights in two weeks.\n Enter your own tips for four nights work to find your four night average"); // Asking question to start interaction

var nightOne = prompt(How much did you make on the first night?);

var nightTwo = prompt(How much did you make on night two?);

var yourTotal = nightOne + + nightTwo;

console.log(yourTotal);

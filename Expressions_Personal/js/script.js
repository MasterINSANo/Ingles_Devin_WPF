//Devin Ingles - 12/02/2014 - Expressions_Personal

//Average tips per night, working as Pizza Delivery
//I am using my last two weeks as basis for tips earned

var tips = [37, 160, 163, 159]; //I work 2 nights a week

alert("If I made $" + tips + " in tips, in four nights in two weeks that I worked, what is the average that I made?"); //doing a follow by doing math problem

var total = tips[0] + tips[1] + tips[2] + tips[3]; //taking the 4 nights in the last two weeks

alert("Add the total of the four different tips made \n Then divide by the number of nights I worked");

var avg = total / 4; //taking the total and dividing by 4

console.log(avg);

alert("Correct!!\n I made on average $129.75 in tips working four nights in two weeks.\n What is the average if you made $100, $67, $83, and $75?"); //Seeing if user can match same answer I get


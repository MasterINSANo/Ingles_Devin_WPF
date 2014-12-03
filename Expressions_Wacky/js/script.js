//Devin Ingles 12/03/2014 Expression_Wacky

alert("Warning, what you are about to see can hurt your eyes."); //It was the first thing that Popped in my head

yes = prompt("Are you 18? Please type Yes or No"); //I wanted to do a yes or no selection, but I don't know how to ad those.

alert("Are you sure?"); //Taking it back to the 90's when pop up windows like these were funny.

yearBorn = prompt("What Year were you born?"); //started to add some user input that I could use.

alert("So you are telling me that you were born in " + yearBorn + "?"); //showing that the input worked

alert("I don't believe you."); //making the user second guess about telling a lie

onlyYou = prompt("If you were born in " + yearBorn + ", tell me something that happened only you would know."); //again another user input

lies = prompt("How can I believe you? Only you would know what happened. You could be making it up!\n So if, " + onlyYou + " really happened, then what is your age?"); //Wanting to tie two different inputs into one that will follow into the next input

age = 2014 - yearBorn; //Here is the math, simple subtraction.

alert("So you are telling me, that you are " + age + " Years of age?\n Wow you are super old!"); //maybe not that old

alert("Do you know how old I am?"); //just a question to side track the user

alert("I was born in 1980"); //HTML was created in 1980, but put into use in 1990

compAge = 2014 - 1980; //more math

alert("so that makes me " + compAge + " years old...\n I am old enough to know when I am being lied to."); //does not seem that old

alert("So then because I am " + compAge + " and you are " + lies + ", then that means that you are not telling me the truth and you will not see this."); //the user is sad now because the page said no

alert("     "); //I wanted the user to feel like the computer is thinking

yesYes = prompt("If you still want to see, Type, Yes Master Computer, and hit ok and I will let you see!"); //well the computer is the boss

apple = prompt("How many apples do you eat monthly?"); //setting up for another formula
banana = prompt("How many banana's do you eat monthly?"); //step two for another formula
total = apple - banana; //total fruit eaten in the month
console.log("the answer is " + total + " apples subtracted by bananas."); //Just showing the answer

alert("Now subtract the " + apple + " apples to the " + banana + " bananas."); //giving the user a in the head math problem

alert(+ total + "...You don't eat enough Vegetables!\n Ok here is the thing that will hurt your eyes!!"); //scolding the user for not eating enough vegetables and agreeing to show the thing
alert("          "); //again, I wanted the user to feel suspense
alert("The answer in life is 42."); //Well it is

alert("What? it took me " + compAge + " years to figure that out. You try staring into a computer screen for " + compAge + " years!"); //if computers had eyes

alert("I still do not trust that you are " + age + " years old, but I am just a browser.\n You argued with a browser, just remember that.\n Have a good day!"); //All that for an anti-climatic ending, dang it browser.


//Devin Ingles 12/03/2014 Expression_Wacky

alert("Warning, what you are about to see can hurt your eyes.");

yes = prompt("Are you 18? Please type Yes or No");

alert("Are you sure?");

yearBorn = prompt("What Year were you born?");

alert("So you are telling me that you were born in " + yearBorn + "?");

alert("I don't believe you.");

onlyYou = prompt("If you were born in " + yearBorn + ", tell me something that happened only you would know.");

lies = prompt("How can I believe you? Only you would know what happened. You could be making it up!\n So if, " + onlyYou + " really happened, then what is your age?");

age = 2014 - yearBorn;

alert("So you are telling me, that you are " + age + " Years of age?\n Wow you are super old!");
//Devin Ingles 12/17/14 Functions_Industry

//How much Pizza is needed for your party??

var guest = prompt("How many guests did you invite to your party?");
console.log("You have " + guest + " guests coming.");
var pizza = 3.5
alert("One Pizza feeds about 3 and a half (3.5) people.");

var pizzaPerGuest = function(guest, pizza){
    var totalPizza = guest / pizza;
    return totalPizza;
}

var total = pizzaPerGuest(guest, pizza);

console.log("You will need a total of " + total + " Pizza(s) for the guests that you invited.");

alert("You only invited " + guest + " guests, but they all have a +2.\nHow many total pizzas do you need to order?");

function extraPizza(pizza){
    var extraPizza = (guest * 3) / 3.5;
    console.log("You will need to order a total of " + extraPizza + " Pizzas for all guests.");
}
extraPizza();
//Devin Ingles 12/17/14 Functions_Industry

//How much Pizza is needed for your party??

var guest = prompt("How many guests will you have at your party?");
console.log("You have " + guest + " guests coming.");
var pizza = 3.5

var pizzaPerGuest = function(guest, pizza){
    var totalPizza = guest / pizza;
    return totalPizza;
}

var total = pizzaPerGuest(guest, 3.5);

console.log(total);
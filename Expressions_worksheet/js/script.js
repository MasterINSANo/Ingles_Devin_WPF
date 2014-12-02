//Expression Worksheet

//Discounts

var item = "Mt. Dew"; //You can't have to much Mt. Dew

var price = 19.99; //Not really the price, but I liked how it worked

var discount = .15; //random # discount I picked

var salesTax = .07; //Indiana sales Tax

var totalNoTax = price - price * discount; //took a few different times before I got it, but I got the math down right

var totalTax = totalNoTax + totalNoTax * salesTax; //this one worked the first time.

alert("Your " + item + " was originally $" + price + ", but after a " + discount + "% discount, it is now $" + totalNoTax + " without tax, and $" + totalTax + " with tax.") //This took me a bit with spacing everything correctly.
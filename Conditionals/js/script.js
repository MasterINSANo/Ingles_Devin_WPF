//Conditional Logic - Logical Operators

var budget = 300;
var samsungPrice = 199.99;
var paycheck = 200;

//if the price of the phone s less our budget AND if our paycheck is over 300
if(samsungPrice < budget && paycheck > 300){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you")
}
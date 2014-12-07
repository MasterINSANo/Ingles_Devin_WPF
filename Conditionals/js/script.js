//Conditional Logic - Logical Operators

var budget = 100;
var samsungPrice = 199.99;
var wonLottery = true;

//if the price of the phone s less our budget AND if our paycheck is over 300
if(samsungPrice < budget || wonLottery === true){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you")
}
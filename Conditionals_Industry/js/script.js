//Devin Ingles 12/08/2014 Conditionals_Industry

//

var device = prompt("What phone Operating system do you use between: Apple, Android, or Windows?");
alert("Did you know about our in store Insurance?\n It covers everything from Lost and Stolen to Water/Physical Damage.");
var insurance = prompt("Would you like to add the in store insurance?\nPlease enter Yes or No.");

if(device == "Apple" && insurance == "Yes" || device == "apple" && insurance == "yes"){
    console.log("If your phone is an " + device + ", then the insurance is a one time of $149.99!");
    if(device == insurance == "Android" || device == insurance == "android"){
        console.log("If your Phone is an " + device + ", then the insurance is a one time of $129.99!");
}else{
      console.log("If your Phone is an " + device + ", then the insurance is a one time of $99.99!");
    }
}
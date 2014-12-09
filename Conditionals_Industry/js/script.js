//Devin Ingles 12/08/2014 Conditionals_Industry

//Selling Insurance

var device = prompt("What phone Operating system do you use between: Apple, Android, or Windows?");
alert("Did you know about our in store Insurance?\n It covers everything from Lost and Stolen to Water/Physical Damage.");
var insurance = prompt("Would you like to add the in store insurance?\nPlease enter Yes or No.");

//If the Phone is a certain type, then the insurance is $___ Much
if(device === "Apple" && insurance === "Yes" || device === "apple" && insurance === "yes" || device === "Apple" && insurance === "yes" || device === "apple" && insurance === "Yes"){ //If the device is Apple, then it is $149.99
    console.log("If your phone is an " + device + " device, then the insurance is a one time of $149.99!");
}else if(device === "Android" && insurance === "Yes" || device === "android" && insurance === "yes" || device === "Android" && insurance === "yes" || device === "android" && insurance === "Yes"){ //If the device is Android, then it is $129.99
    console.log("If your phone is an " + device + " device, then the insurance is a one time of $129.99!");
}else if(device === "Windows" && insurance === "Yes" || device === "windows" && insurance === "yes" || device === "Windows" && insurance === "yes" || device === "windows" && insurance === "Yes"){ //If the device is Windows, then it is $99.99
    console.log("If your phone is a " + device + " device, then the insurance is a one time of $99.99!");
}else{
    console.log("I always recommend insurance on any device, but if you are sure that you do not want insurance we can proceed to checkout."); //if no to the insurance, then this answer prints out.
}
//4 different answers based off of what they input in the prompt.
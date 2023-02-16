"use strict";

console.log("Beginning")

let user = prompt("Who's there?", '');

if(user == "Admin") {
    let password = prompt("Password: ", '');
    if(password == "TheMaster") {
        console.log("Welcome");
    } else if(password == '' || password == null) {
        console.log("Cancelled");
    } else {
        console.log("Wrong password");
    }
} else if(user == '' || user == null) {
    console.log("Cancelled");
} else {
    console.log("I don't know you");
}
"use strict";
let guestList = ["Mariyam", "Akmal", "Ali", "Shahbaz", "Sara"];
let removedGuest = guestList[2];
changeGuest(guestList[2], "Israr");
function changeGuest(guestRemove, guestAdd) {
    for (let i = 0; i < guestList.length; i++) {
        if (guestList[i] == guestRemove)
            guestList[i] = guestAdd;
    }
}
for (let i = 0; i < guestList.length; i++) {
    console.log(guestList[i] + " You are invited to the dinner.");
}
console.log("\n" + removedGuest + " could not make it to the dinner.");
console.log("\n ANNOUNCEMENT\nWe have found a bigger table hence more people are being invited\n");
//Adding to the start of the list
guestList.unshift("Bilal");
//Adding to the middle of the list
let index = Math.floor(guestList.length / 2);
guestList.splice(index, 0, "Ahmed");
//Adding to the last of the list
guestList.push("Waniya");
console.log("\nNew Invitation");
for (let i = 0; i < guestList.length; i++) {
    console.log(guestList[i] + " You are invited to the dinner.");
}
console.log("\n ANNOUNCEMENT\nThe table has been cancelled hence only two people will be invited to the dinner.\n");
//Shrinking List to invite only two people
for (let i = guestList.length - 1; i >= 0; i--) {
    if (i == 1) {
        console.log("\n");
        break;
    }
    console.log("Sorry " + guestList[i] + ", we can not invite you to the dinner.");
    guestList.pop();
}
for (let i = 0; i < guestList.length; i++) {
    console.log(guestList[i] + " You are invited to the dinner.");
}
console.log("\nWe are inviting " + guestList.length + " people to the dinner");
//Emptying the list
for (let i = guestList.length - 1; i >= 0; i--) {
    guestList.pop();
}
console.log("\nList: " + guestList);

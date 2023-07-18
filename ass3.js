"use strict";
var person = 'Mr willy wonka';
console.log(person.toLowerCase());
console.log(person.toUpperCase());
console.log(toCapitalize("a small small sentence"));
function toCapitalize(inputString) {
    return inputString.toLowerCase().replace(/(?:^|\s)\S/g, char => char.toUpperCase());
}

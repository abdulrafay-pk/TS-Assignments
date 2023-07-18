"use strict";
//Program to Trim Whitepsaces from string
var sname = "\t\tAslam \nbhai    from     Dubai \n";
console.log("Original Text: " + sname);
var trimmedName = removeExtraSpaces(sname);
console.log("Trimmed Text: " + trimmedName);
function removeExtraSpaces(inputString) {
    return inputString.replace(/\s+/g, ' ').trim();
}

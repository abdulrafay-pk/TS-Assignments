//Program to Trim Whitepsaces from string
var sname : string = "\t\tAslam \nbhai    from     Dubai \n"
console.log("Original Text: "+sname)
var trimmedName = removeExtraSpaces(sname);
console.log("Trimmed Text: "+trimmedName)

function removeExtraSpaces(inputString: string): string {
    return inputString.replace(/\s+/g, ' ').trim();
}
const places = ["Indonesia","Japan","Maldives","Italy","Turkey"]
console.log("Original List")
console.log(places)

var tempList = [...places]

//Sorting the array alphabetically
for (let i = 0; i < tempList.length; i++){
    let min = i
    for (let j = i+1; j < tempList.length; j++){
        if(tempList[j] < tempList[min]){
            min = j
        }             
    }
    if(min !== i){
        const temp = tempList[i]
        tempList[i] = tempList[min]
        tempList[min] = temp
    }
}
console.log("\nOrdered List")
console.log(tempList)

//Checking the original list order
console.log("\nOriginal List")
console.log(places)

//Arranging the list in reverse
//Sorting the array alphabetically
for (let i = 0; i < tempList.length; i++){
    let max = i
    for (let j = i+1; j < tempList.length; j++){
        if(tempList[j] > tempList[max]){
            max = j
        }             
    }
    if(max !== i){
        const temp = tempList[i]
        tempList[i] = tempList[max]
        tempList[max] = temp
    }
}
console.log("\nReversed List")
console.log(tempList)

console.log("\nOriginal List")
console.log(places)

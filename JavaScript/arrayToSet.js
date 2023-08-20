let arr = [1,2,3,4,5,6,6,7,7,4]

let setfromArray = new Set(arr)
console.log(setfromArray);

let arrayfromSet = Array.from(setfromArray);
console.log(arrayfromSet)


let arrayFromSetUsingSpreadOperator = [...setfromArray];
arrayFromSetUsingSpreadOperator.push(3);
console.log(arrayFromSetUsingSpreadOperator)



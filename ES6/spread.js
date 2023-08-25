let arr = [1,2,3,4,5]
let arr1 = [1,2,3]

let  combi = [...arr,...arr1]
console.log(combi)

console.log(...arr)

let obj = {name:"Dev",age:18};

// let obj1 = obj;    --> This creates a reference of obj in obj1
let obj1 = {...obj , city: "Dehradun"}

console.log("obj: ",obj);
console.log("obj1: ",obj1);

obj.name = "Ujjwal";
console.log("After update obj1 :",obj1)
console.log("After update obj2:",obj)

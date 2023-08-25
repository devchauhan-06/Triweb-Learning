// const a=5
// console.log(a)
// a=7 //Typeerror : Assignment to constant variable


const obj = {name:"Dev",age:19}
console.log("Before :",obj)

// obj={name:"Ujjwal",age:20}
// console.log(obj)  TypeError: Assignment to constant variable.

obj.name= "Ujjwal"
obj.age = 20
console.log(obj)
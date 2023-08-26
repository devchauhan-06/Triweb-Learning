let str = `age is \n ${20}`;

// console.log(str == "age is \n 20")  ->> true
// console.log(str == "age is \\n 20")  ->> false

console.log(String.raw`age is \n ${20}` == "age is \\n 20")



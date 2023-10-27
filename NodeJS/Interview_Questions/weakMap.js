// Weak Map consists of objects as keys

let key1 = {};
let key2 = { uname: "Dev" }

let weakMap = {
    [key1]: "Some Data",
    [key2]: "New Data"
}

console.log(weakMap);


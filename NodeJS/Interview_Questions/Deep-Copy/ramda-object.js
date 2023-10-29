const R = require('ramda')

const obj = {
    a: {
        p: 1,
        q: 2
    }
    , b: 2,
    c: 3
};

const newObj = R.clone(obj)

Object.assign(newObj, obj)

console.log("Before - Obj", obj);
console.log("Before - newObj", newObj);

obj["a"]["p"] = 11;

console.log("After - Obj", obj);
console.log("After - newObj", newObj);
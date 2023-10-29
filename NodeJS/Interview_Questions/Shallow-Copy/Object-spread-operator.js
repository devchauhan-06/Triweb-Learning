const obj = { a: 1, b: 2, c: 3 };

const newObj = { ...obj };

console.log("Before - Obj", obj);
console.log("Before - newObj", newObj);

obj.a = 8;

console.log("After - Obj", obj);
console.log("After - newObj", newObj);
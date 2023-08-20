let arr1 = ['a','b','c','d'];
let arr2 = [1,2,3,4];


console.log("---------Concat----------");
console.log(arr1.concat(arr2));  //Merge two arrays


console.log("-----------Join-----------")   //Array to string
let str = arr1.join(' ');
console.log(str);


console.log("-----------Push-----------")
let l = arr1.push('e');
console.log("Length after push",l);
console.log("Array after push ",arr1);


console.log("-----------Pop-----------")
let elem = arr1.pop();
console.log("Popped element ",elem);
console.log("Array after pop ",arr1);


console.log("-----------Shift-----------")
let elemShift = arr1.shift();
console.log("Return after Shift",elemShift);
console.log("Array after shift",arr1);


console.log("-----------Unshift-----------")
let elemUnshift = arr1.unshift();
console.log("Return after unShift",elemUnshift);
console.log("Array after unshift ",arr1);



console.log("---------Slice--------------")
console.log(arr2.slice(1,3))
console.log("Array after slice",arr2);  //it copies


console.log("---------Splice--------------")
// console.log(arr2.splice(1,3))
console.log(arr2.splice(1,3,'a','b','c'));
console.log("Array after splice",arr2);  //it cuts and can replace too (And you can replace with any length it is not neccesary to replace with the exact no. of character)


console.log("----------Reverse----------")
console.log(arr2.reverse()); // Reverse in place 


console.log("----------Sort----------")
console.log(arr2.sort()); // Sort in place 

console.log("----------forEach----------")
arr1.forEach((elem) => {
    console.log('hey',elem);
})


console.log("----------map----------")
let arr3 = [1,2,3,4,5,6,7,8]
let arrsqr = arr3.map((elem) => {       
    return elem*elem;
})
console.log(arrsqr)

//OR

// let arrsqr = arr3.map((elem) =>  elem*elem;)
// console.log(arrsqr)


console.log("-------filter-------")
 let arrFltr = arr3.filter((elem) =>  elem%2==0); //If condition is true it will return that value
console.log(arrsqr)
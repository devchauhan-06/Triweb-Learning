// let str = "higuys"
// let arr = Array.from(str)
// console.log(arr);


// function checkdata(){
//     console.log(arguments)

//     let arr = Array.from(arguments)
//     console.log(arr)
//     console.log(arr.reverse())
// }

// checkdata(1,2,3,4)





// let arr = ['a','b','c','d']

// let keys = arr.keys(arr)
// console.log(keys)

// for(let e of keys){
//     console.log(e)
//     console.log(arr[e])
// }





// FIND

// let arr = [12,13,14,15]
// let firstOdd = arr.find(getOdd);

// function getOdd(value,index,ar)
// {
//     return value%2 !=0
// }

// console.log(firstOdd)




// findIndex

let arr = [12,13,14,15]
let indexOfFirstOdd = arr.findIndex(getOdd);

function getOdd(value,index,ar)
{
    return value%2 !=0
}

console.log(indexOfFirstOdd)

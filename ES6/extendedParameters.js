//Extended parameter handling

// 1 -> Default parameter values

function add(n1,n2=0){
    return n1+n2
}

let sum1 = add(2,3)
console.log(sum1)

let sum2 = add(2)
console.log(sum2) 
 //without default  parameters -> sum =NaN
////with default  parameters -> 2



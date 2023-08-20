function multiplier(mul,...arg)
{
    let pro = 1;
    let arr = Array.from(arguments);
    arg.forEach((elem) => {
        console.log( mul * elem);
    })


}

console.log("------------------------------------------------");
multiplier(2,1,2,3);
console.log("------------------------------------------------");
multiplier(3,1,2,3,4,5);
console.log("------------------------------------------------");
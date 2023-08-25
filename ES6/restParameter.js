function sum(...numbers)
{
   let sum =0;
   numbers.forEach((elem) => sum=sum+elem)
   return sum
}

console.log(sum(1,2))
console.log(sum(1,2,3))
console.log(sum(1,2,3,4,5,6,7,8,9,10))
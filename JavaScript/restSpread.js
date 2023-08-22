function print(...rest)  //rest is just a name it could be anything it is just said rest
{
   console.log(rest)

   const [first,second] = [...rest]
   console.log("first and second element = ",first,second)
}

print(1,2,3,4,5,6)
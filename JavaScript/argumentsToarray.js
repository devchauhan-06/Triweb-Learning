function multiply()
{
    let pro = 1;
  let arr = Array.from(arguments);
  arr.forEach(element => {
    pro = pro * element;
  })
 console.log(pro);
}

multiply(1,2,3);
multiply(1,2,3,4,5);
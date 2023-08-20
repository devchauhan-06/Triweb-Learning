function multiply()
{
    let pro = 1;
    for(let i=0 ; i< arguments.length ; i++ )
{
    pro = pro* arguments[i];
}
 console.log(pro);
}

multiply(1,2,3);
multiply(1,2,3,4,5);
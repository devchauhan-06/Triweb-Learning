function updateAge(age)
{
    return new Promise((resolve,reject) => {
        if(age>0)
        {
            age = age + 1;
            resolve(age);
        }
        else{
            reject("Invalid Error")
            throw new Error("Invalid age")
        }
    })
}


updateAge(-1)
  .then((updated) =>{
    console.log("Updated age =",updated)
  })
  .catch((err) =>{
    console.log("err : Age invalid")
  })
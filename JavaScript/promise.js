 function validate(name)
 {
    return new Promise((resolve , reject) =>{
     if(name == "dev")
     resolve("Validated");
    else
    reject("Not validated");
    })
 }

 validate("dev")
 .then((res)=>{console.log(res);})
 .catch((err)=>{console.log(err);});
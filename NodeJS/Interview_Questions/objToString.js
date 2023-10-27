// OBJECT -> STRING

let student = {
    sname: "Dev",
    friend: "Rathi",
    class: "CST",
}

console.log(student);

let strfromObj = JSON.stringify(student);

console.log(strfromObj)



//  STRING -> OBJECT 

let objFromStr = JSON.parse(strfromObj);

console.log(objFromStr);
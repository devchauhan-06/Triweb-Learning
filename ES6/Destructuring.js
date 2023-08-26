let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
let [x,y] = arr;
[x,y] = [y,x]
console.log(x); //2
console.log(y);//1


//shorthand notation , object matching

function getstudent(){
    let student = {
        sname:"Dev",
        age : 18,
        section : "CST"
    }
    return student
}

let {sname,age,section} = getstudent();

console.log( sname,age,section)

// deep matching

function getdata(){
    let obj = {
        ename : "Dev",
        salary : 10000,
        location : {
            city : "Dehradun"
        }
    }
    return obj
}

let {ename:empname,salary:empsal,location:{city:empcity}} = getdata();

console.log(empname,empsal,empcity)
let student2 = {
    sname: "Dev",
    mobile: 6396
}

let student = {
    sname: "Rathi",
    mobile: 7018,

    getName: function () {
        console.log(this.sname);
    }
}

let sn = student.getName.bind(student);
setTimeout(sn, 1000)

let st2 = student.getName.bind(student2);
setTimeout(st2, 2000);
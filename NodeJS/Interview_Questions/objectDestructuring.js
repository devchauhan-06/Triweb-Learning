const marks = [10, 8, 9, 6, 4, 7, 5, 8, 9, 7];

[s1Marks, s2Marks, s3Marks, s4Marks, s5Marks, ...otherMarks] = marks;

console.log("subject1Marks", s1Marks);
console.log("subject2Marks", s2Marks);
console.log("subject3Marks", s3Marks);
console.log("subject4Marks", s4Marks);
console.log("subject5Marks", s5Marks);
console.log("Other activity marks", otherMarks);

const student = {
    'uname': "Dev",
    'mobile': 6396,
    'address': "India"
};

const { uname, mobile } = student;
console.log(uname, " and mobile = ", mobile);
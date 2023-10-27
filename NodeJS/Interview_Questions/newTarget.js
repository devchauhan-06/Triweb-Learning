function demoNewTarget(x) {

    if (new.target == undefined)
        console.log("Called as a normal function");

    else {
        this.x = x;
        console.log("Created an object");
    }

    console.log("Inside the function")
}

demoNewTarget(5);  //Function call

let x = new demoNewTarget(4);  //Creating an object of type demoNewTarget
console.log(x)
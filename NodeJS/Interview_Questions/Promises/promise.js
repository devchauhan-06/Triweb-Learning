function func1() {
    return "Function 1"
}

function func2() {
    return new Promise((res, rej) => {

        // rej("Promise is rejected")
        setTimeout(() => {
            res("Function 2")
        }, 1000);
    })
}

function func3() {
    return "Function 3"
}

function startCalling() {
    const res1 = func1();
    console.log(res1);
    func2()
        .then(
            result => {
                console.log(result)
                const res3 = func3();
                console.log(res3);
            }
        )
        .catch(
            error => console.log(error)
        )



}

startCalling();
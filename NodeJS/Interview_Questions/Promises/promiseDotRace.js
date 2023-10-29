// Returns first Reject or Response Promise

function func1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("Function 1")
        }, 2000);
    })
}

function func2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("Function 2")
        }, 500);
    })
}

function func3() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("Function 3")
        }, 1000);
    })
}

Promise.race([func1(), func2(), func3()])
    .then((result) => { console.log("Fulfilled", result) })
    .catch((error) => { console.log("Rejected", error) })
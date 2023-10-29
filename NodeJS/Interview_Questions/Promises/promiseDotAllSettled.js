//Collects response from all promises it can be either resolved or rejected

function func1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Function 1");
        }, 2000);
    })
}

function func2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("Function 2 - Rejected");
        }, 1000);
    })
}

function func3() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Function 3");
        }, 1000);
    })
}

Promise.allSettled([func1(), func2(), func3()])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => { console.log(error) })
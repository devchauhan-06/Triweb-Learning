async function giveMeName() {
    return "Dev Chauhan"
}

async function main() {
    const name = await giveMeName();
    console.log("My name is : ", name);
}


main();
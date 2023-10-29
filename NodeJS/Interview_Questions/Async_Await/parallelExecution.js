
const getName = async () => {
    return "Code"
}

async function main() {

    try {
        console.log("Printing inside main")
        const name = await getName();
        console.log("Got the name - ", name);
    } catch (error) {
        console.log("Exception Handling block ", error.message)
    }
}

console.log("Printing before main")
main();
console.log("Printing after main")
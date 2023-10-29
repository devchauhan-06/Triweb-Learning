//If Something is returned succesfully then it is called resolve , If an error is thrown then it is called reject

const getName = async () => {
    throw new Error("Something went wrong");
}

async function main() {

    try {
        const name = await getName();
        console.log("Got the name - ", name);
    } catch (error) {
        console.log("Exception Handling block ", error.message)
    }
}

main();
// Immediately invoked function expression / Self Executing

async function getName() {
    return "Dev Chauhan";
}

(async () => {
    const name = await getName();
    console.log("My name is : ", name);
})();



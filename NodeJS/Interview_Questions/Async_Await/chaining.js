async function getName(flag = 0) {
    if (flag === 1) {
        return "one";
    } else if (flag === 2) {
        return "two";
    } else if (flag === "one") {
        return "Yes I got first promise"
    }
}

async function fetchData() {
    const result1 = await getName(1);
    const result2 = await getName(result1);
    return { result1, result2 };
}

async function main() {
    const result = await fetchData();
    console.log(result.result1);
    console.log(result.result2);
}

main();
function* getNum(index) {
    while (index < 5) {
        yield index;
        index++;
    }
}

let it = getNum(0);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done);
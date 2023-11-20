function* iterate(array) {
    for (let element of array) {
        yield element
    }
};
const it = iterate(["Oscar", "David", "Ana", "Ulises", "Jennifer"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
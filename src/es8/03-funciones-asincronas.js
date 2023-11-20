// Async functions

const fnPromise = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("Resolve"), 2000)
        : reject(new Error("Error"))
    });
 };

const anotherFunction = async () => {
    const something = await fnPromise();
    console.log(something);
    console.log("Hello!");
};

console.log("Before");
anotherFunction();
console.log("After");

/*
Before
After
Resolve   // Espera dos segundos para imprimir la promesa
Hello!
*/
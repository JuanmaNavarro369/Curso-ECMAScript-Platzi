async function* generator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
};

const other = generator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log("Hello!");



async function arrayOfNames(){
    const names = ["Juan", "Antonia", "Manuel"];

    for await (let value of names){
        console.log(value)
    };
};

arrayOfNames();
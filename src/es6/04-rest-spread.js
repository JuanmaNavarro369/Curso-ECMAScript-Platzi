//REST SPREAD - ASIGNACIÓN DE DESESTRUCTURACIÓN

// Arrays destructuring

let fruits = ["Apple", "Banana", "Tomato", "Mango"];
let [a, b, c, d] = fruits;

console.log(a); // => ES6 - Imprime 'Apple'
console.log(c,d); // =>ES6 - Imprime 'Tomato Mango'


// Object destructuring

let user = {username: "Juanma", age: 23, country: "Spain"};

let {username, age} = user;

console.log(username, age); // => ES6 - Imprime 'Juanma 23'

// Lo que puedes hacer con desestructuración pero no es recomendable

let array = [1, 2, 3, 4, 5];
let [ ,,,, cinco] = array;

console.log(cinco); // => ES6 - Imprime el número 5

// Si necesitas un elemento de cierta posición, puedes utilizar el número de comas previas al elemento que deseado y un nombre para la variable, para encontrarlo.

let array2 = [1, 2, 3, 4, 5];
let {2: tres} = array2

console.log(tres); // => ES6 - Imprime el número 3

// Como los arrays son un tipo de objeto, puedes utilizar la desestructuración de objetos mediante el índice y utilizando también un nombre para la variable.
//SPREAD OPERATOR - OPERADOR DE PROPAGACIÓN

let person = {name: "Juanma", age: 23};
let country = "Spain";

let data = { ...person, country};
console.log(data);

// Parámetro rest

function sum(num, ...values){
    return + num + values[0];
};
sum(1, 1, 2, 3); // => El resultado es 2.
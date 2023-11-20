// Spread operator en objetos

const user = {username: "Taým", age: 23, country: "Expaña"};
const {username, ...restoDePropiedades} = user;

console.log(username); // => Taým
console.log(restoDePropiedades); // => { age: 23, country: 'Expaña' }

 // Transformación arrays => objetos

const array = [ ["name", "Juanma"], ["age", 23], ["country", "Expaña"] ];
console.log(array);

const arrayPasadoAObjeto = Object.fromEntries(array);
console.log(arrayPasadoAObjeto);
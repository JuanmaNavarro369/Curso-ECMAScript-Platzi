const anotherFunction = () => {
    return new Promise((resolve, reject) =>{
        if (true){
            resolve("Hey!!!");
        } else {
            reject("Whooooopss!");
        }
    })
};

anotherFunction()
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const lanzarDado = () => {
    return new Promise((resolve, reject) =>{
        const resultado = Math.floor(Math.random() * 6) + 1;
        if (resultado % 2 === 0){
            resolve(`Has obtenido el número ${resultado}. ¡Es par!`);
        } else {
            reject(`Has obtenido el número ${resultado}. ¡Es impar!`);
        }
    })
};

lanzarDado()
    .then(respuesta => console.log(respuesta))
    .catch(error =>console.log(error));
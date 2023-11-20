
 // Promise .finally

const anotherFunction = () => {
    return new Promise((resolve, reject) =>{
        if (true){
            resolve("Hey!!!");
        } else {
            reject("Whooooops!");
        }
    })
};

anotherFunction()
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))
    .finally(() => console.log("Final de la promesa"))
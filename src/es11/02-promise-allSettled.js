
const promise1 = new Promise((resolve, reject) => reject("Reject"));

const promise2 = new Promise((resolve, reject) => resolve("Resolve"));

const promise3 = new Promise ((resolve, reject) => resolve("Resolve 2"));


 // Promise.allSettled

Promise.allSettled([promise1, promise2, promise3])
    .then(respuesta => console.log(respuesta));
//Sin importar si las promesas se resuelven o se rechazan, allSettled mostrará su estado


 // Promise.all
 
 Promise.all([promise1, promise2, promise3])
    .then(respuesta => console.log(respuesta));
//Si alguna promesa no ha sido resuelta 'all' arrojará error.
const users = {
    pedro: {
        country: "Australia"
    },
    manuela: {
        country: "España"
    },
    ataulfo: {
        country: "Guantanamo"
    }
};

console.log(users.pedro.country);

console.log(users.monica.country); //=> Antes de ES11 devolvería error

console.log(users.monica?.country); //=> Con ES11 devuelve undefined
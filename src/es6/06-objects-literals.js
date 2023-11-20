// enahced object literals

function newUser(user, age, country){
    return {
        user: user,
        age: age,           // - Antes de ECMAScript 6
        country: country
    };
}; console.log(newUser("Tay", 23, "España"));
    //Imprime {user: Tay, age: 23, country: España}



function newUser(user, age, country){
    return {
        user,
        age,                // - ECMAScript6
        country,
    };
}; console.log(newUser("Tay", 23, "España"));
    //Imprime {user: Tay, age: 23, country: España}
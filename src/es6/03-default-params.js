

// ANTES DE ECMAScript6

function newUser(name, age, country){
    var name = name || "Juanma";
    var age = age || 23;
    var country = country || "Spain"
    console.log(name, age, country);
};
newUser(); // Imprime -> Juanma 23 Spain
newUser("Óscar", 34, "México"); // Imprime -> Óscar 34 México



// DESPUÉS DE ECMAScript6

function newAdmin(name = "Juanma", age = 23, country = "Spain"){
    console.log(name, age, country);
};
newAdmin(); // Imprime -> Juanma 23 Spain
newAdmin("Oscar", 34, "México"); // Imprime -> Óscar 34 México





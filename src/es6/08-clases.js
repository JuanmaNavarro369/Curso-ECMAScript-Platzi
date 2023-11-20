class User{
    // Métodos
    saludo(){// Sintaxis de función pero sin la palabra function 
        return "Saludos!";
    };
};

// instancia de una clase
const usuarioNuevo = new User();
console.log(usuarioNuevo.saludo())

const usuarioNuevo2 = new User();
console.log(usuarioNuevo2.saludo())

// constructor
class User {
    constructor(){
        console.log("Nuevo Usuario");
    };
    saludo(){
        return "Saludos!";
    };
};
const usuarioNuevo3 = new User(); // Se imprime el constructor

// this

class User{
    constructor(name){
        this.name = name;
    }
    // metodos
    speak(){
        return "Hola, queridísimo "
    }
    saludo(){
        return `${this.speak()} ${this.name}`
    };
};
const usuarioNuevo4 = new User("Juanma");
console.log(usuarioNuevo4.saludo());

// setters getters

class User{
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
    // metodos
    speak(){
        return "Hola, queridísimo "
    };
    saludo(){
        return `${this.speak()} ${this.name}`
    };

    get suEdad(){
        return this.age;
    }
    set suEdad(n){
        this.age = n
    };
};
const saludo5 = new User("Juanma", 23);
console.log(saludo5.suEdad);
console.log(saludo5.suEdad = 23);
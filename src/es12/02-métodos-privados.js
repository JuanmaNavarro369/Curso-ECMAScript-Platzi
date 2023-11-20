class User{
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
    // metodos
    speak(){
        return "Hola, querid@ "
    };
    saludo(){
        return `${this.speak()} ${this.name}, es cierto que tienes ${this.age} años?`
    };

    get #suEdad(){
        return this.age;
    }
    set #suEdad(n){
        this.age = n
    };
};

const saludo2 = new User("Juanma", 23);
console.log(saludo2.saludo())
console.log(saludo2.suEdad);
console.log(saludo2.suEdad = 24);

 // Por defecto las propiedades y métodos de una clase son públicas, y este concepto se basa en limitar su acceso a solo su propia clase con el caracter almohadilla antes de cada propiedad/método.
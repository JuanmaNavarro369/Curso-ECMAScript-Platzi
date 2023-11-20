var lastName = "David";
lastName = "Manuel";
console.log(lastName);

let fruit = "Apple";
fruit = "Kiwi";
console.log(fruit);

const animal = "Dog";
animal = "Cat";
console.log(animal); //ERROR

const fruits = () => {
    if(true){
       var fruit1 = "Apple"; //Function scope
       let fruit2 = "Kiwi"; //Block scope
       const fruit3 = "Banana"; //Block Scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
};
console.log(fruits);

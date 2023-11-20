
 // Filtro matchAll

const regex = /\b(Apple)+\b/g;

const fruit = "Apple, Banana, Kiwi, Apple, Orange, Mango"

for(const element of fruit.matchAll(regex)){
    console.log(element)
};
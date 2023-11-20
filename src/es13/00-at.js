
 const array = ["one", "two", "three", "four", "five", "six"];


 // Antes de ECMAScript 13
 console.log(array[array.length - 1]); //=> six


 // Después de ECMAScript 13
 console.log(array.at(-1)); //=> six
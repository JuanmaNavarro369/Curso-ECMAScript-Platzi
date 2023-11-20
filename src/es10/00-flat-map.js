
 // flat

 const array = [1,2,3,4,5, [22,33,44, [555]]];
 console.log(array.flat(3));


 // flatmap

 const array2 = [1,2,3,4,5,6];
 console.log(array2.flatMap(v => [v, v * 2]));

 // BigInt

const aBigNumber = 234364567474564567876n;
const aBigNumber2 = BigInt(234364567474564567876);

console.log(aBigNumber); //=> 234364567474564567876n
console.log(aBigNumber2); //=> 234364567474564562944n



 // Nullish

 const number = null;
 const validate = number ?? 66;
 //=> Si number tiene el valor null o undefined, asignale el valor 66

console.log(validate); //=> 66
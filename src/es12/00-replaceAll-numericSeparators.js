
 // replaceAll
 const string = "JavaScript es maravilloso, JavaScript es lo más"

 const replaceString = string.replace("JavaScript", "Python");
 const replaceAllstring = string.replaceAll("Javascript", "Python");

 console.log(replaceString); //=> 'Python es maravilloso, JavaScript es lo más'
 console.log(replaceAllstring); //=> 'Python es maravilloso, Python es lo más'


 // numeric separators

 const Value = 100000000000; //=> Mala legibilidad

 const value = 100_000_000_000; //=> Buena legibilidad
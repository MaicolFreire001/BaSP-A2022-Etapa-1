console.log('--EXERCISE 2: STRINGS');

console.log('-Exercise 2.a:');
/* 2.a. Crear una variable de tipo string con al menos 10 caracteres y 
convertir todo el texto en mayúscula (utilizar toUpperCase). */
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
console.log("The text in uppercase is:", text.toUpperCase());

console.log('-Exercise 2.b:');
/* 2.b. Crear una variable de tipo string con al menos 10 caracteres y generar
 un nuevo string con los primeros 5 caracteres guardando el resultado en una 
 nueva variable (utilizar substring). */
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
var firstFiveCharacters = text.substring(0, 5);
console.log("The first 5 characters are:", firstFiveCharacters);

console.log('-Exercise 2.c:');
/* 2.c. Crear una variable de tipo string con al menos 10 caracteres y generar un 
nuevo string con los últimos 3 caracteres guardando el resultado en una nueva 
variable (utilizar substring). */
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
var lastThreeCharacters = text.substring(text.length-3);
console.log("Los ultimos tres caracteres son:", lastThreeCharacters);

console.log('-Exercise 2.d:');
/* 2.d. Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con la primera letra en mayúscula y las demás en minúscula.
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase
y el operador +). */
var text = "lorEm ipsUm dolOr sIt amEt, consEctetUr adIpiscIng elIt.";
var textFirstUpper = text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
console.log("First letter in uppercase:", textFirstUpper);

console.log('-Exercise 2.e:');
/* 2.e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
var firstBlankSpace = text.indexOf(" ");
console.log("The first blank space is in the position:", firstBlankSpace);

console.log('-Exercise 2.f:');
/* 2.f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio 
entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que 
tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */
var text = "alcohol isopropilico";
var firstWord = text.substring(0, text.indexOf(" "));
var firstWordModified = firstWord.substring(0, 1).toUpperCase() + firstWord.substring(1).toLowerCase();
var secondWord = text.substring(text.indexOf(" ")+1);
var secondWordModified = secondWord.substring(0, 1).toUpperCase() + secondWord.substring(1).toLowerCase();
var result = firstWordModified + " " + secondWordModified;
console.log("The result is:", result);


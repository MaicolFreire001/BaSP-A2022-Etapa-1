console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

console.log('-Exercise 1.a:');
/* 1.a. Crear dos variables numéricas y utilizar el operador suma para guardar 
el valor de la suma de ambos números en una 3er variable. */
var variable1 = 10;
var variable2 = 15;
var suma = variable1 + variable2;
console.log("The addition is:", suma);

console.log('-Exercise 1.b:');
/* 1.b. Crear dos variables de tipo String y concatenarlas guardando el resultado en 
una 3er variable. */
var variable1 = "Hello ";
var variable2 = "World";
var concatenated = variable1 + variable2;
console.log("The variables concatenated are:", concatenated);

console.log('-Exercise 1.c:');
/* 1.c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras 
del string) guardando el resultado de la suma en una 3er variable (utilizar length). */
var variable1 = "Hello";
var variable2 = "World";
var additionOfLenght = variable1.length + variable2.length;
console.log("The addition of the lenghts is:", additionOfLenght);
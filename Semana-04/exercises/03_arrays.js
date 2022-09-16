console.log('--EXERCISE 3: ARRAYS');

/*3.a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses
5 y 11 (utilizar console.log). */
console.log('-Exercise 3.a:');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("The months number 5 and 11 are:", months[4], "and", months[10]);

/*3.b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */
console.log('-Exercise 3.b:');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("The months in ascending order are:", months.sort());

/*3.c. Agregar un elemento al principio y al final del array (utilizar unshift y push). */
console.log('-Exercise 3.c:');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.unshift("First");
months.push("Last");
console.log("The new arrays is:", months);

/*3.d. Quitar un elemento del principio y del final del array (utilizar shift y pop). */
console.log('-Exercise 3.d:');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.shift();
months.pop();
console.log("The new arrays is:", months);

/*3.e. Invertir el orden del array (utilizar reverse). */
console.log('-Exercise 3.e:');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("The new arrays is:", months.reverse());

/*3.f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión
(utilizar join). */
console.log('-Exercise 3.f:');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("The new string is:", months.join("-"));

/*3.g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */
console.log('-Exercise 3.g:');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var newArray = months.slice(months.indexOf("Mayo"), months.indexOf("Noviembre")+1);
console.log("The new arrays is:", newArray);
/* 2.a. Crear una variable de tipo string con al menos 10 caracteres y 
convertir todo el texto en mayúscula (utilizar toUpperCase). */
var texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
console.log("El texto en mayúscula es:", texto.toUpperCase());

/* 2.b. Crear una variable de tipo string con al menos 10 caracteres y generar
 un nuevo string con los primeros 5 caracteres guardando el resultado en una 
 nueva variable (utilizar substring). */
var texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
var primerosCincoCaracteres = texto.substring(0, 5);
console.log("Los primeros cinco caracteres son:", primerosCincoCaracteres);

/* 2.c. Crear una variable de tipo string con al menos 10 caracteres y generar un 
nuevo string con los últimos 3 caracteres guardando el resultado en una nueva 
variable (utilizar substring). */
var texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
var ultimosTresCaracteres = texto.substring(texto.length-3);
console.log("Los ultimos tres caracteres son:", ultimosTresCaracteres);

/* 2.d. Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con la primera letra en mayúscula y las demás en minúscula.
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase
y el operador +). */
var texto = "lorEm ipsUm dolOr sIt amEt, consEctetUr adIpiscIng elIt."
var textoPrimeraMayuscula = texto.substring(0, 1).toUpperCase() + texto.substring(1).toLowerCase();
console.log("Primera letra en mayuscula queda:", textoPrimeraMayuscula);

/* 2.e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */
var texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
var primerEspacioEnBlanco = texto.indexOf(" ");
console.log("El primer espacio se encuentra en la posición", primerEspacioEnBlanco);
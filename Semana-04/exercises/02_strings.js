/* 2.a. Crear una variable de tipo string con al menos 10 caracteres y 
convertir todo el texto en mayúscula (utilizar toUpperCase). */
var texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
console.log("El texto en mayúscula es:", texto.toUpperCase(texto));

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


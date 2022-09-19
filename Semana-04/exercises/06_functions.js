console.log('--EXERCISE 6: FUNCTIONS');

/* 6.a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de 
dicha variable en la consola del navegador. */
console.log('-Exercise 6.a:');
function suma1(number1, number2){
    return number1 + number2;
}
var result = suma1(10, 15);
console.log("The result is:", result);

/* 6.b. A la función suma anterior, agregarle una validación para controlar si alguno 
de los parámetros no es un número; de no ser un número, mostrar una alerta aclarando 
que uno de los parámetros tiene error y retornar el valor NaN como resultado. */
console.log('-Exercise 6.b:');
function suma2(number1, number2){
    if(isNaN(number1) || isNaN(number2)){
        alert("One of the two values is not a number");
        return NaN;
    }
}
console.log("The result is:", suma2("Hello world", 10));
/* 6.c. Aparte, crear una función validate Integer que reciba un número como parámetro y 
devuelva verdadero si es un número entero. */
console.log('-Exercise 6.c:');
function validateInteger(number){
    return Number.isInteger(number);
}
console.log("The result is:", validateInteger(12));

/* 6.d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c.
y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error 
y retornar el número convertido a entero (redondeado). */
console.log('-Exercise 6.d:');
function suma3(number1, number2){
    if(isNaN(number1) || isNaN(number2)){
        alert("One of the two values is not a number");
        return NaN;
    }else{
        if(!validateInteger(number1) || !validateInteger(number2)){
            alert("The value is not an integer number");
            return Math.round(number1 + number2);
        }else{
            return number1 + number2;
        }
    }
}
console.log("The result is:", suma3(12.5, 10));

/* 6.e. Convertir la validación del ejercicio 6d) en una función separada y llamarla 
dentro de la función suma probando que todo siga funcionando igual. */
console.log('-Exercise 6.e:');
function validateTwoIntegers(number1, number2){
    if(isNaN(number1) || isNaN(number2)){
        alert("One of the two values is not a number");
        return NaN;
    }else{
        if(!validateInteger(number1) || !validateInteger(number2)){
            alert("The value is not an integer number");
            return false;
        }else{
            return true;
        }
    }
}
function suma4(number1, number2){
    if(validateTwoIntegers(number1, number2)){
        return number1 + number2;
    }else if(!isNaN(validateTwoIntegers(number1, number2))){
        return Math.round(number1 + number2);
    }
}
console.log("The result is:", suma4(15.5, 10));

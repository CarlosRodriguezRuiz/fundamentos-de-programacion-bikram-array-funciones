// ==========================================================
// BIKRAM - ARRAYS Y FUNCIONES
// ==========================================================


// ==========================================================
// PAIR PROGRAMMING
// ==========================================================


// ----------------------------------------------------------
// ARRAYS
// ----------------------------------------------------------


// 1.- Crear variable de nombre "arrayVacio"
// cuyo valor sea un array vacío.


let arrayVacio = [];


// 2.- Crear variable de nombre "arrayNumeros"
// declarada con un array de números del 0 al 9.
//
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9


let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// 3.- Crear variable de nombre "arrayNumerosPares"
// declarada con un array con los números pares del 0 al 9.
//
// Considerando al 0 como número par.


let arrayNumerosPares = [0, 2, 4, 6, 8];



// 4.- Crear variable de nombre "arrayBidimensional"
// declarada con valor:
//
// [[0, 1, 2], ['a', 'b', 'c']]

let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];



// ----------------------------------------------------------
// FUNCIONES
// ----------------------------------------------------------


// 5.- Crear la función "suma".
//
// Debe aceptar como argumentos dos números.
//
// Debe devolver el resultado de su suma.


function suma(num1, num2) {
    let suma = num1 + num2;
    return suma;
}


// 6.- Crear la función "potenciacion".
//
// Debe aceptar como argumentos dos números.
//
// Debe devolver el resultado de elevar
// el primer número (a) al segundo número (b).
//
// a^b

function potenciacion(a, b) {
    let resultado = a ** b;
    return resultado;
}



// 7.- Crear la función "separarPalabras".
//
// Debe aceptar como argumento un string.
//
// Debe devolver un array con las palabras.
//
// Ejemplo:
//
// Entrada:
// "hola mundo"
//
// Salida:
// ["hola", "mundo"]


function separarPalabras(palabras) {
    return palabras.split(" ");
}


// 8.- Crear la función "repetirString".
//
// Debe aceptar como argumentos:
//
// - un string
// - un número
//
// Debe devolver un string que sea el resultado
// de concatenar el primer string
// el número indicado de veces.


function repetirString(texto, numero) {
    let resultado = "";

    for (let i = 0; i < numero; i++) {
        resultado += texto;
    }

    return resultado;
}


// 9.- Crear la función "esPrimo".
//
// Debe aceptar como argumento un número.
//
// Debe devolver:
//
// true  -> si el número es primo.
// false -> si el número NO es primo.


function esPrimo(num) {
    if (num <= 1) {
        return false;
    } else {

        for (let i = 2; i < num; i++) {

            if (num % i == 0) {
                return false;
            }
        }

        return true;
    }
}


// ----------------------------------------------------------
// MEZCLANDO ARRAYS Y FUNCIONES
// ----------------------------------------------------------


// 10.- Crear la función "ordenarArray".
//
// Debe aceptar como argumento un array de números.
//
// Debe devolver un array ordenado
// de MENOR a MAYOR.


function ordenarArray(array) {
    return array.sort((a, b) => a - b);
}

let numeros = [5, 2, 9, 1, 3];

console.log("Antes:", numeros);
console.log("Después:", ordenarArray(numeros));


// 11.- Crear la función "obtenerPares".
//
// Debe aceptar como argumento un array de números.
//
// Debe devolver un array
// únicamente con los elementos pares.

let numeross = [5, 2, 9, 8, 1, 3];

function obtenerPares(numeross) {
    let soloPares = [];

    for (let i = 0; i < numeross.length; i++) {
        if (numeross[i] % 2 === 0) {
            soloPares.push(numeross[i]);
        }
    }

    return soloPares;
}

console.log(obtenerPares(numeross));

// 12.- Crear la función "pintarArray".
//
// Debe aceptar como argumento un array.
//
// Debe devolver una cadena de texto
// representando el contenido del array.
//
// Ejemplo:
//
// Array de entrada:
// [0, 1, 2]
//
// String de salida:
// "[0, 1, 2]"

function pintarArray(array) {
    return array.toString();
}
console.log("PintarArray1: " + pintarArray([0, 1, 2]));

// 13.- Crear la función "arrayMapi".
//
// Debe aceptar como argumentos:
//
// - un array
// - una función
//
// Debe devolver un nuevo array
// en el que se haya aplicado la función
// a cada elemento del array.

function arrayMapi(array, funcion) {
    let nuevoArray = [];

    for (let i = 0; i < array.length; i++) {

        let elemento = array[i];
        let resultado = funcion(elemento);
        nuevoArray.push(resultado);
    }

    return nuevoArray;
}

function doble(numero) {
    return numero * 2;
}

console.log(arrayMapi([1, 2, 3], doble));


// 14.- Crear la función "eliminarDuplicados".
//
// Debe aceptar como argumento un array.
//
// Debe devolver un array
// en el que se hayan eliminado
// los elementos duplicados.


function eliminarDuplicados(array) {
    let arrayOrdenado = [];
    let nuevoArray = [];
    arrayOrdenado = array.sort((a, b) => a - b);
    for (let i = 0; i < arrayOrdenado.length; i++) {
        if (arrayOrdenado[i] !== arrayOrdenado[i + 1]) {
            nuevoArray.push(arrayOrdenado[i]);
        }
    }
    return nuevoArray;
}
console.log(eliminarDuplicados([3, 2, 2, 1, 3, 5, 5]));


// ==========================================================
// PROYECTO INDIVIDUAL
// ==========================================================


// ----------------------------------------------------------
// ARRAYS
// ----------------------------------------------------------


// 15.- Crear variable de nombre "arrayNumerosNeg".
//
// Debe contener un array de números
// desde 0 hasta -9.
//
// 0, -1, -2, -3, -4, -5, -6, -7, -8, -9

let arrayNumerosNeg = [];
for (let i = 0; i > -10; i--) {
    arrayNumerosNeg.push(i);
}
console.log(arrayNumerosNeg);


// 16.- Crear variable de nombre "holaMundo".
//
// Debe contener un array con las palabras:
//
// "Hola"
// "Mundo"

let holaMundo = ["Hola", "Mundo"];



// 17.- Crear variable de nombre "loGuardoTodo".
//
// Debe contener un array con los siguientes valores:
//
// "hola"
// "que"
// 23
// 42.33
// "tal"

let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];



// 18.- Crear variable de nombre "arrayDeArrays".
//
// Debe contener el siguiente array:
//
// [
//     [756, "nombre"],
//     [225, "apellido"],
//     [298, "direccion"]
// ]

let arrayDeArrays = [
    [756, "nombre"],
    [225, "apellido"],
    [298, "direccion"]
];



// ----------------------------------------------------------
// FUNCIONES
// ----------------------------------------------------------


// 19.- Crear la función "multiplicacion".
//
// Debe aceptar como argumentos dos números.
//
// Debe devolver el resultado
// de multiplicar ambos números.

function multiplicacion(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}




// 20.- Crear la función "division".
//
// Debe aceptar como argumentos dos números.
//
// Debe devolver el resultado
// de dividir el primer número entre el segundo.


function division(num1, num2) {
    let resultado = num1 / num2;
    return resultado;
}


// 21.- Crear la función "esPar".
//
// Debe aceptar como argumento un número.
//
// Debe devolver:
//
// true  -> si el número es par.
// false -> si el número es impar.


function esPar(numero) {

    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}



// 22.- Crear el array "arrayFunciones".
//
// Debe contener como valores las funciones:
//
// suma
// resta
// multiplicacion
//
// Todas las funciones deben:
//
// - aceptar dos números como argumentos.
// - devolver el resultado de su operación.


function resta(num1, num2) {
    return num1 - num2;
}
let arrayFunciones = [suma, resta, multiplicacion];

console.log(arrayFunciones);


// ----------------------------------------------------------
// MEZCLANDO ARRAYS Y FUNCIONES
// ----------------------------------------------------------


// 23.- Crear la función "ordenarArray2".
//
// Debe aceptar como argumento un array de números.
//
// Debe devolver un array ordenado
// de MAYOR a MENOR.

function ordenarArray2(array) {
    return array.sort((a, b) => b - a);
}



// 24.- Crear la función "obtenerImpares".
//
// Debe aceptar como argumento un array de números.
//
// Debe devolver un array
// únicamente con los elementos impares.


function obtenerImpares(array) {

    let impares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            impares.push(array[i]);
        }
    }
    return impares;
}


// 25.- Crear la función "sumarArray".
//
// Debe aceptar como argumento un array numérico.
//
// Debe devolver la suma de todos
// los números del array.
//
// Ejemplo:
//
// Array:
// [1, 2, 3]
//
// Resultado:
// 6

function sumarArray(array) {

    let sumaTotal = 0;
    for (let i = 0; i < array.length; i++) {
        sumaTotal += array[i];
    }
    return sumaTotal;
}



// 26.- Crear la función "multiplicarArray".
//
// Debe aceptar como argumento un array numérico.
//
// Debe devolver la multiplicación
// de todos los números del array.
//
// Ejemplo:
//
// Array:
// [2, 3, 4]
//
// Resultado:
// 24

function multiplicarArray(array) {

    let multiplicacionTotal = 1;
    for (let i = 0; i < array.length; i++) {
        multiplicacionTotal *= array[i];
    }
    return multiplicacionTotal;
}
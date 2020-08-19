//Ciclo for
/*
for (let i=0; i < 5; i++) {
    console.log(i);
}
*/

// Ciclo 
/*
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
*/

// Do while
/*
var numero;
do {
    numero = prompt("digite un numero");
    console.log(numero);
} while (numero != "0");


switch(fruta) {
    case 'limon':
        console.log('Es limon');
        break;
    //case...

    default :
        console.log('No es fruta');    
}

function imprimir() {
    console.log("Hola Mundo");
} */

/*
var numero = [];

    for (let i = 0; i < 5; i++) {
        numero [i] = prompt("Ingrese numero: ");
        console.log(numero[i]);
    }

console.log(numero);
*/



// Funcion que suma 2 números y retorna la suma de ambos 
// o FALSE si algun parametro no es tipo númerico
/*
function suma (valor1, valor2) {
    if (typeof (valor1) == "number" && typeof(valor2) == "number")
        return valor1 + valor2;
    else
        return false;
}

var numero1 = prompt("Ingrese numero 1: ");
var numero2 = prompt("Ingrese numero 2: ");

console.log(suma(numero1, numero2));
*/
/*
// EJERCICIO 1
//var numero;
var suma = 0;

for (let i = 0; i < 5; i++) {
    //numero = parseInt(prompt("Ingrese el numero "+ (i+1) +": "));
    suma += parseInt(prompt("Ingrese el numero "+ (i+1) +": "));
}

alert(suma);
*/
/*
// EJERCICIO 2
var numero;
var suma = 0;

for (let i = 0; i < 5; i++) {
    numero = prompt("Ingrese el numero "+ (i+1) +": ");

    if(isNaN(numero)) {
        alert ("El valor ingresado no es un numero");
        i--;
    }
    else {
        suma += parseInt(numero);
    }
}

alert("El valor de la suma es: " + suma);
alert("El valor del promedio es: " + (suma/5));
*/

/*
// EJERCICIO 3
var edad; 
var mayoresEdad = 0;

function mayorDeEdad (f_edad) {
    let mayor = false;

    if (f_edad > 17) {
        mayor = true;
    }
    
    return mayor;
}

while (edad != 0) { 
    edad = prompt("Ingrese edad: ");

    if(isNaN(edad)) {
        alert ("El valor ingresado no es un numero");
    } else if(mayorDeEdad(edad)) {
        mayoresEdad++;
    }
}

alert(mayoresEdad + " son mayores de edad.");
*/

// EJ 4 - PROMEDIO CONDICIONAL
/*
function promedio(f_suma, f_n) {
    return f_suma / f_n;
}

var numero;
var suma = 0;
var cont = 0;

while (numero != "salir") {
    numero = prompt("Ingrese numero:");

    if (numero == "salir") {
        break;
    } else if (isNaN(numero)) {
        alert("El valor ingresado no es un numero");
    } else if (parseInt(numero) < 10) {
        suma += parseInt(numero);
        cont++;
    }
}

alert(promedio(suma, cont));
*/

/*
// EJ 5 - PARES E IMPARES
function esPar (valor) {
    if(valor%2 == 0) {
        return true;
    } else {
        false;
    }
}

var numero;
var cont_pares = 0;
var cont_impares = 0;

while (numero != 0) {
    numero = parseInt(prompt("Ingrese numero:"));

    if (numero == 0) {
        break;
    } else if (isNaN(numero)) {
        alert("El valor ingresado no es un numero");
    } else if(esPar(numero)) {
        cont_pares++;
    } else {
        cont_impares++;
    }
}

if(cont_pares > cont_impares) {
    alert("Los pares ganaron");
} else if (cont_pares < cont_impares) {
    alert("Los impares ganaron");
} else {
    alert("Hay empate");
}
*/

// EJ 6 - DE NUMEROS A LETRAS
function numAletra(f_num) {
    switch (f_num) {
        case 1:
            return "a";
        case 2:
            return "b";
        case 3:
            return "c";
        case 4:
            return "d";
        case 5:
            return "e";
        case 6:
            return "f";
        case 7:
            return "g";
        case 8:
            return "h";
        case 9:
            return "i";
        case 10:
            return "j";
        default:
            return -1;
    }
}

var letras = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j"];

function numAletra2(f_num) {
    return letras[(f_num-1)];
}

var numero;

while (numero != 0) {
    numero = prompt("Ingrese numero entre 1 y 10:");
    if (numero == 0) {
        break;
    } else if (isNaN(numero)) {
        alert("El valos ingresado no es un nuemro");
    } else if (numero < 1 || numero > 10) {
        alert("El numero ingresado no esta dentro del rango de 1 a 10");
    } else {
        alert("La letra es: " + numAletra(parseInt(numero)) + " " + numAletra2(parseInt(numero)));
    }
}


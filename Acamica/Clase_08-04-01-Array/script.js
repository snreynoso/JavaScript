//------- EJ 01 -------//
/* let numArray = [];

while(true){
    let numero = prompt("Ingrese numero:");

    if(numero.toUpperCase() == "STOP") {
        break;
    } else {
        numArray.push(numero);
    }
}

console.log(numArray); */

//------- EJ 02 -------//
/*let evenNum = [];
let oddNum = [];
let notNum = [];

while (true) {
    let userValue = prompt("Ingrese un vlor:");

    if (userValue == 0) {
        break;
    }

    if (isNaN(userValue)) {
        notNum.push(userValue);
    } else {
        if (userValue % 2) { // If it is odd
            oddNum.push(userValue);
        } else {             // If it is not odd, is even
            evenNum.push(userValue);
        }
    }
}

console.log("Valores que no son numeros: " + notNum);
console.log("Valores que son impares: " + oddNum);
console.log("Valores que son pares: " + evenNum);*/

//------- EJ 03 -------//
/*let numArray = [];

while(true) {
    let userValue = prompt("Ingrese valor:");

    if(userValue == 0) {break}

    if(!isNaN(userValue)) {
        numArray.push(userValue);
    }
}

numArray = numArray.sort();
numArray.pop();
numArray.shift();

console.log(numArray);*/
//console.log(Math.min.apply(null, numArray));
//console.log(Math.max.apply(null, numArray));

//------- EJ 04 -------//
let array = [];

while (true) {
    let userValue = prompt("Ingrese valor:");

    if (userValue == 0) { break; }

    array.push(userValue);
}

if (array.length % 3 == 1) {
    array.shift();
} else if (array.length % 3 == 2) {
    array.shift();
    array.pop();
}

console.log(array);
let index = array.length / 3;

console.log(index);

let array01 = array.slice(0, index);
let array02 = array.slice(index, (2 * index));
let array03 = array.slice((2 * index), (3 * index));

console.log(array01);
console.log(array02);
console.log(array03);


//imprimirEsto("Hola Mundo!!!");

//function imprimirEsto(valor) {
//    console.log(valor);
//}

//imprimirEsto = (valor) => console.log(valor);

let users = [];

function add_user() {
    let username = prompt("Username:");
    return username;
}

/*
while (true) {
    username = add_user();

    if(username.toUpperCase() == "EXIT") {
        break;
    }

    if(users.indexOf(username) == -1){
        alert("Wellcome " + username);
    } else {
        alert("This username already exits");
    }

    users.push(username);
} 
*/

class Persona {
    constructor(nombre, apellido, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.activo = activo;
    }
}


let nombre = prompt("Ingresa nombre");
let apellido = prompt("Ingrese apellido");
let activo = new Boolean(prompt("Activo?"));

let persona = new Persona(nombre, apellido, activo);

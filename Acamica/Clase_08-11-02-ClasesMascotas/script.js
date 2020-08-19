class Perro {
    constructor(raza, color, edad, estado_adopcion) {
        this.raza = raza;
        this.color = color;
        this.edad = edad;
        this.estado_adopcion = estado_adopcion;
    }

    modificarEstadoAdopcion(value) {
        this.estado_adopcion = value;
    }

    informarEstadoAdopcion() {
        return this.estado_adopcion;
    }
}

let perro01 = new Perro("caniche", "negro", 3);
let perro02 = new Perro("pastor aleman", "marron", 6);

//console.log(perro01);
//console.log(perro02);

perro01.modificarEstadoAdopcion("En proceso de adopcion");
perro02.modificarEstadoAdopcion("Adoptado");

perro01.informarEstadoAdopcion;
perro02.informarEstadoAdopcion;

//console.log(perro01);
//console.log(perro02);

var nuevoPerro = true;
var listaPerros = [];

while (nuevoPerro) {
    let raza = prompt("Ingrese la raza: ");
    let color = prompt("Ingrese  el color: ");
    let edad = prompt("Ingrese la edad: ");
    let estado_adopcion = prompt("Ingrese estado de adopcion: ")
    listaPerros.push(new Perro(raza, color, edad, estado_adopcion));

    nuevoPerro = window.confirm("Agregar otro perro");
}

//console.log(listaPerro);

console.log(listaPerros);

console.log("Perros en adopcion: ")
for(perro of listaPerros){
    if(perro.estado_adopcion == "En adopcion"){
        console.log(perro);
    }
}

console.log("Perros en proceso de adopcion: ")
for(perro of listaPerros){
    if(perro.estado_adopcion == "En proceso de adopcion"){
        console.log(perro);
    }
}

console.log("Perros adoptados: ")
for(perro of listaPerros){
    if(perro.estado_adopcion == "Adoptado"){
        console.log(perro);
    }
}

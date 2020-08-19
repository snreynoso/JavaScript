/* // Tipo Objeto, diccionario (llave, valor / key, value)
var Obj_Clasicos = {
    nombre: "DWFS",
    apellido: "ONLINE-41",
    edad: 43,

    estado: function() {
        return "Feliz";
    }
}; */

class Personas {
    constructor(nombre, apellido, fec_nac) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fec_nac = fec_nac;
        this._edad;
    }

    get edad() {
        if (!this._edad) {
            this._edad = 2020 - this.fec_nac;
        }
        return this._edad;
    }

    set edad(valor) {
        this._edad = valor;
    }
}

/* let personas_vintage = {
    nombre: "Acamica",
    apellido: "DWFS ONLINE 41",
    edad: 23
}; */

let persona = new Personas("Acamica", "DWFS ONLINE 41", 1985);
console.log(persona.edad);
persona.edad = 44;
console.log(persona.edad);


class Aviones {
    //Constructor
    constructor(motor, peso) {
        this.motor = motor;
        this.peso = peso;
    }
    // Getters and Setters
    get getMotor() {
        console.log("GETTER");
        return this.motor;
    }

    set setMotor(motor) {
        console.log("SET");
        this.motor = motor;
    }

    get getPeso() {
        console.log("GETTER");
        return this.peso;
    }

    set setPeso(peso) {
        console.log("SET");
        this.motor = peso;
    }

    // Methods
    acelerar() {
        this.velocidad = (isNaN(this.velocidad) ? this.aceleracion : this.velocidad + this.aceleracion);
    }
    frenar() {
        this.velocidad = this.velocidad - this.desacelerar;
    }

    estadoVelocidad() {
        return "La velocidad actual del " + this.nombre + " es de " + this.velocidad;
    }

}


a320 = new Aviones ("Roll&Royce", 35000);
a321 = new Aviones ("CFM", 42000);

a321.setMotor("Pratt");

console.log(a320);
console.log(a321);
/* // Grabar en el local storage
localStorage.setItem("Nombre", "Santiago");

// Guardar en el session storage
//sessionStorage.setItem("Curso", "DWFS-ONLINE-41");

console.log(localStorage.getItem("Nombre")); */

localStorage.clear();

let val1 = 5;
let val2 = [1, 2, 'acamica'];
let val3 = {
    name: "Acamica",
    age: 20
};
let val4 = true;

localStorage.setItem("val1", val1);
localStorage.setItem("val2", val2);
localStorage.setItem("val3", val3);
localStorage.setItem("val4", val4);

let key;

for (let i=0; i<localStorage.length; i++) {
    key = localStorage.key(i);
    console.log(localStorage.getItem(key));
}




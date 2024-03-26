// la palabra reservada para crear funciones es function

function saludar() {
    console.log('Hola mundo');
}

saludar(); // llamamos a la función saludar

function suma() {
    return 2 + 2; // return regresa el valor que esté a su derecha
}

let resultado = suma(); // guardamos el valor de suma() dentro de resultado
console.log(resultado);

console.log(suma()); // podemos llamar a una función desde el c.log para evitar crear una variable
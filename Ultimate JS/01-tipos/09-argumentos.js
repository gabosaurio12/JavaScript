function suma(a,b) { // los valores que recibimos en la función se llaman parámetros
    console.log(arguments); // nos ayuda a ver los argumentos que estamos pasando
    return a + b;
}

let resultado = suma(5, 6); // los valores que le pasamos a la función cuando la llamamos se llaman argumenntos
console.log(resultado);
console.log(typeof suma); // suma es de tipo function
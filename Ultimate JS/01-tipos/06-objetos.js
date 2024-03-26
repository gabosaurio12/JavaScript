// Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

// Es un registro pero en js se conoce como objeto
let personaje = {
    nombre: "Tanjiro", // se escribe la variable seguida de : y al final se agrega una coma para que js sepa que vamos a ingresar otro
    anime: "Demon Slayer", // a los campos se les conoce como llave-valor o propiedad 
    edad: 16, // es buena práctica en el último elemento poner la coma
};
console.log(personaje);
console.log(personaje.nombre); // así se accede a las propiedades
console.log(personaje['anime']); // esta es otra forma de acceder

// editar el valor de la proiedad

personaje.edad = 13; // esta es más común

let llave = 'edad';
personaje[llave] = 16; // esta es mejor cuando no sabemos el nombre de la propiedad o si vamos a iterar las convenciones de la propiedad

// Eliminar una propiedad
delete personaje.anime;
console.log(personaje);
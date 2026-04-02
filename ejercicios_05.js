
// 1. Crea un array que almacene cinco animales

let animales = ["perro", "gato", "lobo", "oso", "leon"];
console.log(animales);



// 2. Añade dos más. Uno al principio y otro al final

// Agrega el inicio
animales.unshift("puma");

//Agrega el final
animales.push("tigre");

console.log(animales);




// 3. Elimina el que se encuentra en tercera posición

animales.splice(2,1);

console.log(animales);


// 4. Crea un set que almacene cinco libros


let libros = new Set(["El vendedor de sueños", "Las travesias", "El principio", "Habitos atomicos", "Sueño lucidos"]);
console.log(libros);


// 5. Añade dos más. Uno de ellos repetido

libros.add("Invicto");
libros.add("Acuatico");
libros.add("Las travesias");

console.log(libros);


// 6. Elimina uno concreto a tu elección

libros.delete("Acuatico");
console.log(libros);


// 7. Crea un mapa que asocie el número del mes a su nombre

let mapas = new Map([ [1, "enero"], [2, "febrero"], [3, "marzo"], [4, "abril"], [5, "mayo"] ])

console.log(mapas);


// 8. Comprueba si el mes número 4 existe en el map e imprime su valor

// has

console.log(mapas.has(6));

//get 

console.log(mapas.get(4));


// 9. Añade al mapa una clave con un array que almacene los meses de verano

mapas.set("verano", ["junio", "julio", "agosto"]);
console.log(mapas);


// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

//Array

let granja = ["gallinas", "patos", "cerdos", "vacas"];

// Convertir a set

let granjaSet = new Set(granja);

// Guardar en Map

let mapa = new Map();
mapa.set("animales", granjaSet);

console.log(mapa);





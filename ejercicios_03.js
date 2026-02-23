// 1. Concatena dos cadenas de texto

let ciudad = "Medellin";
let temperatura = 17;
let temperaturaCiudad =
  "La temperatura en " + ciudad + " es de " + temperatura + "°C";
console.log(temperaturaCiudad);

let saludos = "Hola";
let resultado = 5 + 3;
let resultado1 = saludos + " El resultado es " + resultado;
console.log(resultado1);

// 2. Muestra la longitud de una cadena de texto

let longitud = "esto es una cadena de texto muy larga";
console.log(longitud.length);

longitud = "esto si es una cadena de texto pero super largaaaaaaaaaa";
console.log(longitud.length);

// 3. Muestra el primer y último carácter de un string

let caracter = "Primero ultimO";
console.log(caracter[0]);
console.log(caracter[13]); // Muestra los caracteres

caracter = "Primero fiN";
console.log(caracter[0]);
console.log(caracter[caracter.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string

let mayúsculas = "todo se convierte en mayuscula";
console.log(mayúsculas.toLocaleUpperCase()); // Imprime Mayusculas

let minúsculas = "todo se convierte en minuscula";
console.log(minúsculas.toLocaleLowerCase()); // Imprime Minusculas

// imprime la posición donde empieza el texto

let saludo = "hola mundo";
console.log(saludo.indexOf("hola mundo"));
console.log(saludo.indexOf("mundo"));
console.log(saludo.indexOf("planeta"));

// verifica si el texto existe

saludo = "esto es un saludo para probra";
console.log(saludo.includes("esto es un saludo para probra")); // true

saludo = "encuentras esta frase ?";
console.log(saludo.includes("encuentras esta frasee")); // false

// imprime una parte del texto

let ejercicio = "hola mundo";
console.log(ejercicio.slice(0, 4));

// reemplaza una palabra por otra

frutas = "Manzana pera uva";
console.log(frutas.replace("uva", "banano"));

let pais = "Colombia, Peru, Argentina";
console.log(pais.replace("Peru", "Mexico"));

// 5. Crea una cadena de texto en varias líneas

let texto = `hola juan 
como estas 
que es de tu vida 
mijo`;
console.log(texto);

let nombre = `Mi nombre es Vicente
mi Ciudad es Medellin y 
me gusta programar eso creo`;
console.log(nombre);

// 6. Construye un string usando variables (template literals)

ciudad = "Medellin";
temperatura = "18°C";
temperaturaCiudad = `En ${ciudad} la temperatura es de ${temperatura}`;
console.log(temperaturaCiudad);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let frutas = "Manzana, Pera, Uva";
let nuevaFrutas = frutas.replace(/ /g, "-");
console.log(nuevaFrutas);

nombre = "guiones y mas       guiones ";
let nombreGuiones = nombre.replace(/ /g, "_");
console.log(nombreGuiones);

// 8. Comprueba si una cadena de texto contiene una palabra concreta

let java = "Estoy aprendiendo javaScript todo los dias";
console.log(java.includes("Estoy aprendiendo javaScript todo los dias"));

// 9. Comprueba si dos strings son iguales

let a = "hola";
let b = "HOLA";
let c = "como estas";
console.log(a === b);
console.log(a !== b);
console.log(c === c);

// 10. Comprueba si dos strings tienen la misma longitud

longitud = "esto es una prueba";

console.log(longitud.length);

longitud = "esto tambien";
console.log(longitud.length);

// 1. Crea una variable para cada operación aritmética

// Operación aritmética

let a = 10;
let b = 5;

console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicacion
console.log(a / b); // Divicion

console.log(a % b); // Modulo
console.log(a ** b); // Exponente

a++; // Incremento
console.log(a);

b--; // Decremento
console.log(b);

// 2. Crea una variable para cada tipo de operación de asignación,
//  que haga uso de las variables utilizadas para las operaciones aritméticas

// Operacion de asignacion

let valor = 2;
console.log(valor);
valor += 2;
console.log(valor);

valor -= 2;
valor *= 2;
valor /= 2;
valor %= 2;
valor **= 2;

let puntos = 10;
puntos += 5; //  15
console.log(puntos);
puntos -= 3; // 12
console.log(puntos);
puntos *= 2; //  24
console.log(puntos);
puntos /= 4; // 6
console.log(puntos);

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

// Operadores de comparacion

let x = 10;
let y = 5;

console.log(x === 10); //true
console.log(x !== y); //true
console.log(x >= 10); //true
console.log(x !== "y"); //true
console.log(x > y); //true

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

x = 10;
y = 5;

console.log(x === y); //false
console.log(x !== x); //false
console.log(x <= y); //false
console.log(x !== 10); //false
console.log(x != "10"); //false

// 5. Utiliza el operador lógico and

x = 15;
y = 10;

console.log(x >= y && x <= y); // false
console.log(x <= y && x >= y); //false
console.log(x === x && x === 15); //true
console.log(x === y && x === "15"); //false
console.log(x !== y && x > y); //true

// 6. Utiliza el operador lógico or

x = 15;
y = 10;

console.log(x >= y || x <= y); //true
console.log(x <= y || x >= y); //true
console.log(x === x || x === 15); //true
console.log(x === y || x === "15"); //false
console.log(x !== y || x < y); //true

// 7. Combina ambos operadores lógicos

x = 10;
y = 5;

console.log((x >= x && x !== x) || x !== y); //true
console.log((x < y && x > y) || x === x); // true
console.log(x > y || (x >= y && x === y)); //true
console.log(x === y || (x !== x && x > y)); //false
console.log(x !== x || (x === y && x < y)); //false
console.log(x === x && (x !== x || x === y)); //false

// 8. Añade alguna negación

x = 10;
y = 5;

console.log(!(x > y && x < y)); //true
console.log(!(y === x) || (x <= y && x !== y)); //true
console.log(!(x === x) && (x !== x || x >= y || y <= x)); //false
console.log(!(x !== y && x >= x) || (x <= y && x === x)); // false

// 9. Utiliza el operador ternario

let edad = 18;

let esMayorDeEdad = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(esMayorDeEdad);

let nota = 5;

let notaFinal = 5 >= 4.5 ? "Aprobado" : " No aprobado";
console.log(notaFinal);

let precio = 20;

let compra = 20 < 18 ? "Tiene plata" : "No tiene plata";
console.log(compra);

let edad1 = 20;

let acceso = !edad1 <= 18 ? "permitido" : "denegado";
console.log(acceso);

// 10. Combina operadores aritméticos, de comparáción y lógicas

x = 10;
y = 5;

console.log((x + y >= 20 && x === x) || x - y > 0); // true

console.log(10 <= 5 || (10 * 5 && 10 / 5 > 0));

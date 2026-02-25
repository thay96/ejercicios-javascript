// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

// if (si)

let nombre = "Junior";

if (nombre === "Junior") {
  console.log("Si se llama Junior");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "Admin";
let contraseña = 1234;

if (usuario === "Admin" && contraseña === 1234) {
  console.log("Acceso permitido");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = 10;

if (numero > 0) {
  console.log("El numero es positivo");
} else if (numero < 0) {
  console.log("El numero es negativo");
} else {
  console.log("El numero es cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 16;

if (edad >= 18) {
  console.log("Puede votar");
} else {
  let faltan = 18 - edad;
  console.log(`No puede votar, le faltan ${faltan} años`);
}

let envio = 80;
let dinero = 20;

if (dinero >= envio) {
  console.log("Puede enviar el paquete");
} else {
  let costoEnvio = envio - dinero;
  console.log(`No puede enviarlo le faltan ${costoEnvio} de dinero`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let edad1 = 20;

let estado = edad1 >= 18 ? "Adulto" : "Menor";
console.log(estado);

let nota = 100;

let notaFinal = nota >= 60 ? "Aprobado" : "Reprobado";
console.log(notaFinal);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "Enero";

if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
  console.log("Invierno");
} else if (mes === "Marzo" || mes === "Abril" || mes === "Mayo") {
  console.log("Primavera");
} else if (mes === "Junio" || mes === "Julio" || mes === "Agosto") {
  console.log("Verano");
} else if (mes === "Septiembre" || mes === "Octubre" || mes === "Noviembre") {
  console.log("Otoño");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

mes = "Enero";

switch (mes) {
  case "Enero":
  case "Marzo":
  case "Mayo":
  case "Julio":
  case "Agosto":
  case "Octubre":
  case "Diciembre":
    console.log("Estos meses tienen 31 días");
    break;

  case "Abril":
  case "Junio":
  case "Septiembre":
  case "Noviembre":
    console.log("Estos meses tienen 30 días");
    break;

  case "Febrero":
    console.log("Estes mes tiene 28");
    break;

  default:
    console.log("Mes no válido");
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let saludos = "Español";

switch (saludos) {
  case "Español":
    console.log("HOLA");
    break;

  case "Ingles":
    console.log("HELLO");
    break;

  case "Portugues":
    console.log("OLA");
    break;

  case "Frances":
    console.log("BONJOUR");
    break;

  default:
    console.log("Idioma no soportado");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let mes1 = "Enero";

switch (mes1) {
  case "Diciembre":
  case "Enero":
  case "Febrero":
    console.log("Invierno");
    break;

  case "Marzo":
  case "Abril":
  case "Mayo":
    console.log("Primavera");
    break;

  case "Junio":
  case "Julio":
  case "Agosto":
    console.log("Verano");
    break;

  case "Septiembre":
  case "Octubre":
  case "Noviembre":
    console.log("Otoño");
    break;

  default:
    console.log("Mes no valio");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

mes = "Enero";

switch (mes) {
  case "Enero":
  case "Marzo":
  case "Mayo":
  case "Julio":
  case "Agosto":
  case "Octubre":
  case "Diciembre":
    console.log("Estos meses tienen 31 días");
    break;

  case "Abril":
  case "Junio":
  case "Septiembre":
  case "Noviembre":
    console.log("Estos meses tienen 30 días");
    break;

  case "Abril":
  case "Junio":
  case "Septiembre":
  case "Noviembre":
    console.log("Estos meses tienen 30 días");
    break;

  case "Febrero":
    console.log("Estes mes tiene 28");
    break;

  default:
    console.log("Mes no válido");
}

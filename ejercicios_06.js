// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20



for (let i = 1; i <= 20; i++){
    console.log(i);
}



// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado



let suma = 0;

for (let i = 1; i <= 100; i++ ){
    suma = suma + i;
}
console.log(suma);






// 3. Crea un bucle que imprima todos los números pares entre 1 y 50


for (let i = 2; i <= 50; i+= 2){
    console.log(i);
}



// 4. pon un array de nombres, usa un bucle para imprimir cada nombre en la consola




let nombres = ["Pepito",  "Jaimito", "Miguelito", "Fulanito"];

for (let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}



// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto


let texto = "Hola mundo";
let contador = 0; 

for (let i = 0; i < texto.length; i++) {
    if ("aeiou".includes(texto[i])) {

        contador++;
    }               
}
console.log(contador);
    

// 6. pon un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [2, 3, 4,];

let producto = 1; 

for (let i = 0; i < numeros.length; i++){
    producto *= numeros[i];

}
console.log(producto);


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i <= 10; i ++) {
    console.log("5 x " + i + " = " + (5*i));

}
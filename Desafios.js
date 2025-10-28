// Desafio N°1
/*
Crea un programa que solicite al usuario una calificación numérica (0-20) 
y que imprima en la consola: la calificación, el mensaje de desempeño 
(Excelente para 17+, Bueno para 14-16, Satisfactorio para 11-13, Desaprobado 
para menos de 11), si aprobó o no, y cuántos soles de bono recibe si aprueba 
(S/ 100 por aprobación).
*/
function Desafio_01() {
    let nota = prompt("Ingresa tu calificación (0 - 20):");
    nota = Number(nota);

    if (isNaN(nota) || nota < 0 || nota > 20) {
        console.log("Debes ingresar un número entre 0 y 20.");
    } else {

        console.log("Tu calificación será: " + nota);

        if (nota >= 17) {
            console.log("Desempeño: Excelente");
            console.log("Aprobaste");
            console.log("Bono: S/ 100");
        } else if (nota >= 14) {
            console.log("Desempeño: Bueno");
            console.log("Aprobaste");
            console.log("Bono: S/ 100");
        } else if (nota >= 11) {
            console.log("Desempeño: Satisfactorio");
            console.log("Aprobaste");
            console.log("Bono: S/ 100");
        } else {
            console.log("Desempeño: Desaprobado");
            console.log("No aprobaste");
            console.log("Sin bono");
        }
    }
}

Desafio_01();


// Desafio N°2
/*
Escribe un programa que solicite un número al usuario y que genere su tabla 
de multiplicar (del 1 al 10) usando un bucle for. Imprime cada resultado en 
la consola con un formato claro como "5 x 3 = 15".
*/
function Desafio_02() {
    let numero = prompt("Ingresa un número para ver su tabla de multiplicar:");
    numero = Number(numero); 

    if (isNaN(numero)) {
        console.log("Debes ingresar un número válido.");
    } else {

        console.log("Tabla de multiplicar del " + numero);

        for (let i = 1; i <= 10; i++) {
            console.log(numero + " x " + i + " = " + (numero * i));
        }
    }
}

Desafio_02();


// Desafio N°3
/*
Crea un programa que maneje una lista de compras usando un arreglo. 
El programa debe permitir: agregar elementos (push()), eliminar el último 
(pop()), mostrar todos los elementos, y contar cuántos hay en la lista.
*/
function Desafio_03() {
    let listaCompras = ["Leche", "Pan", "Huevos"];

    console.log("Lista inicial:");
    for (let i = 0; i < listaCompras.length; i++) {
        console.log((i + 1) + ". " + listaCompras[i]);
    }

    let nuevoProducto = prompt("Ingresa un producto para agregar a la lista:");
    listaCompras.push(nuevoProducto);
    console.log("Producto agregado:", nuevoProducto);

    console.log("Lista actual:");
    for (let i = 0; i < listaCompras.length; i++) {
        console.log((i + 1) + ". " + listaCompras[i]);
    }

    let eliminado = listaCompras.pop();
    console.log("Producto eliminado:", eliminado);

    console.log("Lista final:");
    for (let i = 0; i < listaCompras.length; i++) {
        console.log((i + 1) + ". " + listaCompras[i]);
    }

    console.log("Total de productos:", listaCompras.length);

    let buscar = prompt("¿Qué producto deseas buscar en la lista?");
    let posicion = listaCompras
    .map(item => item.toLowerCase())
    .indexOf(buscar.toLowerCase());

    if (posicion !== -1) {
        console.log(buscar + " SÍ está en la lista. Posición: " + (posicion + 1));
    } else {
        console.log(buscar + " NO se encontró en la lista.");
    }
}

Desafio_03();


// Desafio N°4
/*
Escribe un programa que solicite las notas de 5 estudiantes (valores entre 0-20), 
las almacene en un arreglo y calcule: la nota máxima, la nota mínima, el promedio 
y cuántas notas están por debajo del promedio. Además, calcula un incentivo: S/ 50 
por cada nota arriba de 15.
*/
function Desafio_04() {
    let notas = [];
    let suma = 0;

    for (let i = 0; i < 5; i++) {
        let nota = Number(prompt("Ingresa la nota " + (i + 1) + " (0-20):"));

        while (isNaN(nota) || nota < 0 || nota > 20) {
            nota = Number(prompt("Nota no válida. Ingresa un número entre 0 y 20:"));
        }

        notas.push(nota);
        suma += nota;
    }

    let promedio = suma / notas.length;
    let max = Math.max(...notas);
    let min = Math.min(...notas);

    let debajoProm = 0;
    let incentivo = 0;

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < promedio) {
            debajoProm++;
        }
        if (notas[i] > 15) {
            incentivo += 50;
        }
    }

    console.log("Notas:", notas);
    console.log("Máxima:", max);
    console.log("Mínima:", min);
    console.log("Promedio:", promedio.toFixed(2));
    console.log("Debajo del promedio:", debajoProm);
    console.log("Incentivo total: S/ " + incentivo);
}

Desafio_04();


// Desafio N°4
/*
Crea un menú que permita al usuario elegir qué tipo de conversión desea: 
de kilómetros a millas, de kilogramos a libras o de Celsius a Fahrenheit. 
Usa switch para manejar las opciones y realiza la conversión correcta.
*/
function Desafio_05() {
    let opcion = prompt("Elige una opción:\n1. Kilómetros a Millas\n2. Kilogramos a Libras\n3. Celsius a Fahrenheit");

    switch (opcion) {

        case "01":
            let km = Number(prompt("Ingresa los kilómetros:"));
            if (isNaN(km) || km < 0) {
                console.log("Número no válido.");
            } else {
                let millas = km * 0.621371;
                console.log(km + " km = " + millas.toFixed(2) + " millas");

                let costo = km * 5;
                console.log("Costo en taxi: S/ " + costo);
            }
            break;

        case "02":
            let kg = Number(prompt("Ingresa los kilogramos:"));
            if (isNaN(kg) || kg < 0) {
                console.log("Número no válido.");
            } else {
                let libras = kg * 2.20462;
                console.log(kg + " kg = " + libras.toFixed(2) + " libras");
            }
            break;

        case "03":
            let celsius = Number(prompt("Ingresa los °C:"));
            if (isNaN(celsius)) {
                console.log("Número no válido.");
            } else {
                let fahren = (celsius * 1.8) + 32;
                console.log(celsius + "°C = " + fahren.toFixed(2) + "°F");
            }
            break;

        default:
            console.log("Opción no válida.");
            break;
    }
}

Desafio_05();
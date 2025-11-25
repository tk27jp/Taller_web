// ==== 1. VARIABLES ======
/*
Principios Básicos de JavaScript
Apellidos y Nombres:
Código:
*/
// Let - varibale que puede cambiar
let nombre = "Dalia";
let edad = 19;
let matriculado = true;
let pension = 555.50;

console.log("=== Variables ===");
console.log(nombre);
console.log(edad);
console.log(matriculado);
console.log(pension);

// Dato: Variables tipo let pueden cambiar en el tiempo
nombre = "Tokio"
edad = 20;
matriculado = false;
pension = 555.60;

console.log("=== Despues de Cambiar ===", nombre, edad);
console.log(nombre);
console.log(edad);
console.log(matriculado);
console.log(pension);

// Variables tipo const (no se pueden cambiar)
const MI_DNI = 72660061;
const PI = 3.14159;
const MI_EMAIL = "U23225643@utp.edu.pe"

console.log("PI", PI);
console.log("EMAIL", MI_EMAIL);

// 2. Tipo de datos
console.log("=== TIPOS DE DATOS ===");
let numero = 42;
let decimal = 1.8;
let texto = "Hola Mundo";
let falso = false;
let nulo = null;
let indefinido;

console.log("Número:", numero, typeof numero)
console.log("Decimal:", decimal, typeof decimal)
console.log("Texto:", texto, typeof texto)
console.log("Falso:", false, typeof false)
console.log("Nulo:", null, typeof null)
console.log("Indefinido:", indefinido, typeof indefinido)

// 3. Operadores Aritmeticos
let a = 10;
let b = 3;
console.log("Suma: (+)", a + b)
console.log("Modulo: (%)", a % b)
console.log("Potencia: (**)", a ** b)

// Clase Math
/*
1. Redondeo
2. Valor Absoluto
3. Números mayores entre un grupo
4.  Números menores entre un grupo
5. Raíz cuadrada
6. Elevado a la 3 o 4
7. Número alaetorio entre 1 - 10
8. Redondear hacia aarriba
9. Redondear hacia abajo
10. Número aleatorio con decimales
*/
// 1.Redondeo
let redondeado = Math.round(a / b);
console.log('Redondeo:', redondeado);

// 2.Valor Absoluto
let valorAbsoluto = Math.abs(-a);
console.log('Valor Absoluto:', valorAbsoluto);

// 3.Número Mayor entre un grupo
let maximo = Math.max(a, b);
console.log('Número Mayor:', maximo);

// 4. Número Menor entre un grupo 
let minimo = Math.min(a, b);
console.log('Número Menor:', minimo);

// 5.Raíz Cuadrada
let raizCuadrada = Math.sqrt(a);
console.log('Raíz Cuadrada:', raizCuadrada);

// 6.Elevado a la 3 o 4 
let alCubo = Math.pow(a, 3); 
let alCuatro = Math.pow(b, 4);  
console.log('Elevado a la 3 (a^3):', alCubo);
console.log('Elevado a la 4 (b^4):', alCuatro);

// 7.Número Aleatorio entre 1 - 10
let numeroAleatorio = Math.floor(Math.random() * 10) + 1; 
console.log('Número Aleatorio (1-10):', numeroAleatorio);

// 8.Redondear hacia arriba
let redondeadoArriba = Math.ceil(a / b);  
console.log('Redondeo hacia Arriba:', redondeadoArriba);

// 9.Redondear hacia abajo
let redondeadoAbajo = Math.floor(a / b);
console.log('Redondeo hacia Abajo:', redondeadoAbajo);

// 10.Número aleatorio con decimales 
let numeroAleatorioDecimal = (Math.random() * 10).toFixed(2); 
console.log('Número Aleatorio con Decimales (0-10):', numeroAleatorioDecimal);

//4. OPERADORES DE ASIGNACION
console.log("==== OPERADORES DE ASIGNACION ====");
let x = 5;
console.log("x =" , x);

x += 3;
console.log("X += ->", x);
x -= 2;
console.log("x -= ->" , x);
x *= 2;
console.log("x *= ->" , x);

x /= 3;
console.log("x /= 3 ->", x);
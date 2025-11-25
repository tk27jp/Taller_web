let edad = 20;  //Numerico
let tieneCarnet = true;     //Booleano

// Operador AND (&&)
console.log("¿Puede conducir?", edad >= 18 && tieneCarnet);

// Operador OR (||)
let tienePermiso = false;
console.log("¿Tiene autorización?", tieneCarnet || tienePermiso);

//Operador NOT (!)
console.log("¿No tiene permiso?", !tienePermiso);

// Combinacion Compleja
let tieneLicencia = true;
let vehiculoAsegurado = true;
console.log("¿Pueede salir a carretera?",
    edad >= 18 && tieneLicencia && vehiculoAsegurado);

// Desafioo n°1
/*
Una persona puede entrar
a una pelicula si: tiene mas de 12 años
y tiene entrada,
O si un adulto la acompaña.
Verifica con operadores logicos si una
persona de 10 años sin entrada con un adulto
puede entrar.
 */

let niñaEdad = 10;
let tieneEntrada = false;
let conAdulto = true;
console.log("¿Puede entrar?", niñaEdad> 12 && niñaEdad && tieneEntrada || conAdulto);

// 2. Estructuras Cndicionales IF/ELSE
let nota = 12;
let sms = "";
if (nota >= 17){
    sms ="Excelente, aprobaste con distincion";
}else if (nota>= 14){
    sms= "Bueno, aprobado";
}else if (nota >= 12){
    sms ="aprobado";
}else if (nota >= 0){
    sms = "Desaprobado";
}else{
    sms = "Nota invalidada";
}
console.log("¿Aprobaste?", sms);

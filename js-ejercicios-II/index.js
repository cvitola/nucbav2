// 1) Hacer una funcion que reciba algo por parametro, y devuelva si es un array o no.
// Pista: este es un método que no vimos pero es .isArray(). Arrancamos compliqueti, van a tener que leer documentación :O
//let vector = [20,21,-22,0];
//let entrada ="Hola, como estas?";
// let entrada = [
//   [1, 2],
//   { nombre: "Cristian", apellido: "Vitola", edad: 37 },
//   "Que dice?",
// ];

// function evaluaParametro(parametro) {
//   if (Array.isArray(parametro)) return "Es un array";
//   else return "No es un array";
// }

// console.log(evaluaParametro(entrada));

//Fin punto 1

// 2) Hacer una funcion que reciba un array (el cual puede tener un subarray adentro) y que me lo devuelva plano
// Ejemplo:
// Si recibo un array [1, 2, 3, [4, 5]
// Quiero que me devuelta [1, 2, 3, 4, 5]

// let miArray = [
//   [20, 15],
//   { ciudad: "Moron", codigo: "1708" },
//   "Cristian",
//   "Mabel",
// ];
// console.log(`El array tiene ${miArray.length} posiciones`);

// function normalizarArray(vector) {
//   return vector.flat();
// }

// let nuevoArray = normalizarArray(miArray);
// console.log(`El nuevo array tiene ${nuevoArray.length} posiciones`);

//Fin punto 2

// let array = [4,5,6];
// const condicion = item => item > 7;
// function ver(array, condicion){
//     return array.every(condicion);
// }
// console.log(ver(array,condicion));

// 3) Hacer una funcion que reciba dos parametros:
// Un parametro -> el array
// Otro parametro -> la posición en el array
// Y que me devuelva el valor en la posición dada del array
// Ejemplo:
// // Si recibo un array [1, 2, 3, 4]
// // Y una posición 1
// // Quiero que me devuelva la posición 1 de [1, 2, 3, 4], o sea, 2.

// const registros = [
//     {
//         ciudad: "Neuquen",
//         temperatura: 30
//     },
//     {
//         ciudad: "San Luis",
//         temperatura: 28
//     },
//     {
//         ciudad: "Mendoza",
//         temperatura: 26
//     },
//     {
//         ciudad: "Buenos Aires",
//         temperatura: 29
//     },
//     {
//         ciudad: "Posadas",
//         temperatura: 35
//     },
// ];

// function devuelvePosicion(vector, i){
//     let cantidadPosiciones = vector.length;
//     if((cantidadPosiciones>i) && (i>=0)) return vector[i];
//     else return "Error, fuera de dimension";
// }

// console.log(devuelvePosicion(registros,10));
// console.log(devuelvePosicion(registros,0));
// console.log(devuelvePosicion(registros,3));
// console.log(devuelvePosicion(registros,2));
// console.log(devuelvePosicion(registros,-2));
// //Fin Punto 3 y 4

// // 5) Hacer una función que reciba un array y un callback con una condición (revisar que era callback)
// // Y que devuelva si todos los elementos del array cumplen con esa condicion
// const lista = [{
//     dni: "30123321",
//     nombre: "Cristian",
//     edad: 33,
// },
// {
//     dni: "22123321",
//     nombre: "Federico",
//     edad: 43,
// },
// {
//     dni: "39123321",
//     nombre: "Sabrina",
//     edad: 29,
// },
// {
//     dni: "40123321",
//     nombre: "Natalia",
//     edad: 26,
// },];
// // console.log(lista);
// const callback = obj => obj.edad > 18;
// function cumple(array,condicion){
//     return array.every(condicion);
// }

// console.log(cumple(lista,callback));

// 6) Hacer una función que reciba tres cosas:
// Un array con strings (ejemplo: ["hola", "como", "andas"])
// Un callback con una condición
// Y algo a buscar
// Y que me devuelva un array filtrado con los elementos que cumplan la condición
// Ejemplo:
// Esta función -> function buscarCosas(["holis", "el diego"], callback, "lis"])
// // Debe devolver -> ["holis"]
// // Comprobar mayusculas y minusculas

// const lista = ["Buen dion", "Crisis", "Vacaciones", "Sentido"];
// const clave = "Crisis";
//  const callback = algo => valor => algo === valor;
//  function busqueda(array,condicion,llave){
//      return array.filter(condicion(llave));
// }

// console.log(busqueda(lista,callback,clave));

// //8) Hacer una función que reciba un array y un valor, y compruebe si ese array contiene ese valor dado
// //const condicion = item => item == valor
// function miFuncion(array,valor){
//     return array.some(item => item == valor);
// }

// console.log(miFuncion(lista,clave));

// //sort
// console.log(vector);
// console.log(vector.sort((a,b) => b-a)) //b-a de mayor a menor .. a-b de mas chico al mas grande.

// //reduce

// vector.reduce()

// const vector = [10,20,30,"mhm"];
// let retorno = [];
// for(let i=0;i<vector.length;i++){
//     if(vector[i]>=20) {
//         retorno.push(vector[i]);
//     }
//     console.log(`El elemento que recorro es: `);
// }

// console.log(retorno)

// EVERY
// Nos dice si TODOS los elementos del array, cumplen con una condicion
//Dado un array y una condicion se debe recorrerlo hasta el final y por cada elemento preguntar si la condicion es verdadera para ese elemento.
//voy a necesitar una variable para retornar ese resultado

const array = [
  {
    nombre: "Cristian",
    apellido: "Perez",
    edad: 20,
  },
  {
    nombre: "Mario",
    apellido: "xerez",
    edad: 40,
  },
  {
    nombre: "Martha",
    apellido: "Perez",
    edad: 18,
  },
];
let flag = true; //Por defecto digo que todos la cumplen
let i = 0;
const ApellidoClave = "Perez";
debugger;
while (i < array.length && flag == true) { //o recorro hasta el final o salgo cuando cambie el flag, osea ya hay uno q no la cumple
  if (array[i].apellido != ApellidoClave) flag = false;
  i++;
}

if (flag) //pregunto por cual condición salió
  console.log("Todos cumplen la condicion");
else console.log("ahh noo, uno ya no la cumple");

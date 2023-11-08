//* Variables
let a = 3;
let b = 0,
  c = 'hello'; // Comentarios

//* 7 tipos PRIMITIVOS + OBJETOS + FUNCIONES

//* string
('hello'); // Comillas Simples
('hello'); // Comillas dobles

//* number
let positive = 100; // entero positivo
let negative = -200; // entero negativo
let float = 1220.32; // flotante
let exponencial = 1e6; // notacion exponencial (1 x 10^6)
let infinity = Infinity; // infinito
let nan = NaN; // Not a number (de hecho es de tipo número)

//* boolean
let t = true;
let f = false;

//* null
let n = null;

//* undefined
let u = undefined;

//* symbol (ECMAScript 6, Representar valores únicos)
//* bigInt (Representar enteros de cualquier tamaño)

//* OBJECTS AND ARRAYS

//* Function
function myFunction(arg1, arg2) {
  console.log(arg1 + arg2);
  // return arg1, arg2;
}

//* Arrow Functions
const myFunction = (arg1, arg2) => console.log(arg1 + arg2);
myFunction(2, 4);

//* Typeof
const data = 1;
console.log(typeof data);

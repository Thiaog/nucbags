//SCOPE
//QUE ES?

//GLOBAL
let a = 'soy global';

//SCOPE EN FUNCIONES
//LAS FUNCIONES CREAN SU PROPIO CONTEXTO DE EJECUCION - 
function fn() {
    let b = 'soy de mi funcion';
    console.log(b);
}
fn();

//SCOPE EN BLOQUES - IF ELSE / FOR / WHILE / SWITCH

{
    let c = 'en tu cara global';
    console.log(c);
}

console.log(a);

//CAMELCASE palabraSegundaTercera
let miVar = 'lalala';
miVar = 'jsjsjs';

console.log(miVar);

//CONST - es una variable que no puede reasignar su valor
//ESTO ES ASI CON PRIMITIVE TYPE

const MI_CONST = 'TEXTO';
//MI_CONST = 'otro texto';
const MI_ARR = [];
MI_ARR.push(1);
//console.log(MI_ARR);

//STRING
//let myString = new String ('hola soy un string');
let myString1 = 'hola soy un string 12121221009128020';
let myString2 = "hola soy un string";
let myString3 = `hola soy un string`;
let myString4 = '                 soy un string         ';
let otroValor = myString3.toUpperCase();

//METODOS TRANQUI
console.log(myString1.length);
console.log(myString1[myString1.length-1]);
//console.log(myString2.toLowerCase());
//console.log(myString3.toUpperCase());
//console.log(myString4.trim());
// console.log(otroValor);
// console.log(myString3);

//METODOS MAS CHETOS
// console.log(myString1.indexOf("a"));
// console.log(myString1.indexOf("h"));
// console.log(myString1.indexOf("#"));
// console.log(myString1.indexOf("9"));
// console.log(myString1.indexOf("soy"));

//SLICE - te devuelve un pedacito de string desde el indice que pasamos  por parametro
let text = 'daskjastkjahsdkasdhkasdkjas';
// console.log(text.slice(5));
// console.log(text.slice(5, 8));
let fakeCSV = "120,M,ROJO";
let textToArray = fakeCSV.split(',');//METODO STRING -> ARRAY
console.log(textToArray);
let arraToString = textToArray.join(',');// ARRAY -> STRING
console.log(arraToString);

let chageText = "Mi super texto";
let textoModificado = chageText.replace("Mi" , "Tu");//RegEx EXPRESIONES REGULARES

console.log(chageText);
console.log(textoModificado);

let str = 'abcde';

for (let char of str) {
    console.log(char.toUpperCase().repeat(3));
}


//NUMBER
let numero = 10;
let numero2 = 10.321;

//+ * - /
console.log(Math.PI);
console.log(Math.round(numero2));//redondea normal
console.log(Math.ceil(numero2));//redondea al mas alto
console.log(Math.floor(numero2));//redondea al mas bajo
console.log(Math.abs(-32));
console.log(Math.pow(5,2));

//RANDOM NUMEROS

let myRand = Math.random();
console.log(myRand);
//UN NUMERO ENTRE 1 - 10
let paso1 = Math.random();//0.5771235761018003
let paso2 = paso1 * 10;//5.771235761018003
let paso3 = Math.floor(paso2);// 5
let paso4 = paso3 + 1;

let randomNum = Math.floor(Math.random() * 10) + 1;

console.log('RANDOM DE ONE: ', randomNum);
console.log('RANDOM PASITO A PASITO: ', paso4);

//console.log(paso4);

//PARSEINT / PARSEFLOAT
let textoInt = "5";
let textoFloat= "5.3213514";

// console.log(typeof textoInt);
// console.log(typeof parseInt(textoInt));
// console.log(typeof textoFloat);
// console.log(typeof parseFloat(textoFloat));
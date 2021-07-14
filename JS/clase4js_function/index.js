//FN= FUNCION
//FUNCIONES - ES UNO DE LOS TEMAS MAS IMPORTANTES EN JS
//DEFINICION: UN BLOQUE REUTILIZABLE DE CODIGO, LAS FUNCIONES NOS PERMITEN ESCRIBIR CODIGO QUE LUEGO PODEMOS VOLVER A USAR.
//LAS FUNCIONES TIENEN DOS PARTES
//1) LA DECLARACION DE LA FUNCION
//2) CORRER LA FN O LLAMAR LA FN, CALL A FN / RUN A FN

//Declarar fn

function funcName() {
    //codigo que va a hacer algo....
}

function tresConsolas() {
    console.log('Hola bro');
    console.log('Hola bro');
    console.log('Hola bro');
}

// tresConsolas();

//EJEMPLO DADO

function dadoRandom() {
    let numero = Math.floor(Math.random() * 6) + 1;
    console.log('Dado numero: ' + numero);
}

//PARAMETROS
function lanzarDado(cantidad) {
    for (let index = 0; index < cantidad; index++) {
        dadoRandom();
     }
}
//ARGUMENTO DE LA FUNCION
// lanzarDado(50);

//JS NO VALIDA EL TIPO DE DATO DE LOS PARAMETROS
function sayMyName(nombre) {
    if (typeof nombre === 'string') { 
     console.log(`Tu nombre es : ${nombre}`);
    } else {
        console.log('esperaba un string');
    }   
}

sayMyName()

//FN DE MATH

function cuadrado(num) {
    console.log(num * num);
}

function sumar (a, b) {
    console.log(a + b)
}

function dividir(a, b) {
    console.log(a / b)
}

cuadrado(5)
sumar(50,250)
dividir(50,10)

//RETURN - el valor que devuelve la funcion, son super utiles pq podemos guardarlo en una variable o pasarlo a otra funcnion a otra funcion a otra

function cuadradoR(num) {
    return num * num;
}

function sumarR (a, b) {
    return a + b;
}

function dividirR(a, b) {
    return a / b;
}

let cuadradoDe5 = cuadradoR(5);
let sumaDeNum = sumarR(50,250);
let dividirVar = dividirR(50,10);

console.log(cuadradoDe5);
console.log(sumaDeNum);
console.log(dividirVar);

function retornaMuchos() {
    return [1, 51, 153];
}

let arr = retornaMuchos();

console.log(arr);

//EJEMPLO DE FN CON VARIOS PARAMETROS Y QUE DEVUELVE UN ARRAY DE TODOS ESOS PARAMETROS
//DESPUES DEL RETURN NO SE EJECUTA MAS NADA

function cuadrados(...args) {
    let miArray = [];
    for (let index = 0; index < args.length; index++) {
        miArray.push(args[index] * args[index]);
    }
    return miArray;
}

let arrayDeCuadrados = cuadrados(1,2,3,4,5);
console.log(arrayDeCuadrados);
let [valor1, valor2, valor3] = cuadrados(1,2,3);

console.log('valor1: ' + valor1);
console.log('valor2: ' + valor2);
console.log('valor3: ' + valor3);


//APROVECHANDO EL RETURN
//V1
function esRojo(color) {
    if (color.toLowerCase() == 'rojo') {
        return true;
    } else {
        return false;
    }
}

// console.log(esRojo('ROJOiiI'));

//V2
function esRojo2(color) {
    if (color.toLowerCase() == 'rojo') {
        return true;
    } 
        return false;
}

// console.log(esRojo2('ROJO'));

//V3
function esRojo3(color) {
  return color.toLowerCase() == 'rojo'
}

// console.log(esRojo3('ROJO'));

//EJEMPLO DE FN VALIDAR PASSWORD
//Requisitos
//1 - Mayor a 8 caracteres
//2 - sin espacios en blanco
//3 - no puede contener el nombre del usuario

//V1
function checkPassword(password, userName) {
    if (password.length < 8) {
        return false;
    } else if (password.includes(' ')) {
        return false;
    } else if (password.includes(userName)) {
        return false;
    }
    return true;
}

let pass = '123usuario123';
let userId = 'usuario123';

let msjCheckPass = checkPassword(pass, userId)
? 'Ok tu password es correcto'
: 'Password invalido';
console.log(msjCheckPass);

//V2
function checkPassword2(password, userName) {
    let passwordLength = password.length >= 8; 
    let passwordBlanc = !password.includes(' ') ;
    let passwordUser = !password.includes(userName);
    return passwordLength && passwordBlanc && passwordUser; 
}

let msjCheckPass2 = checkPassword2(pass, userId)
? 'Ok tu password es correcto'
: 'Password invalido';
console.log(msjCheckPass2);

//FN promedio
let notasAlumno = [10, 5, 10];

function promedio(arr) {
    let total = 0;
    for (let num of arr) {
        //total = total + num
        total += num;
    }
    return total / arr.length; 
}
let promedioAlumno = promedio(notasAlumno);
console.log(`Promedio final = ${promedioAlumno.toFixed(2)}`);

//FUNCTION EXPRESION

let multiplicar = (a, b) => {
    return a * b;
};
let sum = (a, b) => {
    return a + b;
};
let div = (a, b) => {
    return a / b;
};

let mathOperations = [multiplicar, sum, div];
console.log(mathOperations[0](5,5));

for (let fn of mathOperations) {
    let resultado = fn(5,5);
    console.log(resultado);
}

//CALLBACKS
let doMath = (a, b, cb) => {
   return cb(a, b);
};

console.log('[doMath]: ' + doMath(5,5,multiplicar));
console.log('[doMath]: ' + doMath(5,5,sum));

let cambiarAyB = (a, b, cb) => {
    let num1 = a * a;
    let num2 = b * b;
    return cb(num1, num2);
};

console.log('[cambiarAyB]: ' + cambiarAyB(5,5,sum));

const multiplicarBy = (num) => {
    let numeroRecordado = num; 
    return (otroNumero) => {
        return numeroRecordado * otroNumero;
    };
};

const doble = multiplicarBy(2);
const triple = multiplicarBy(3);
const cuadruple = multiplicarBy(4);
console.log(doble(50));
console.log(triple(30));
console.log(cuadruple(25));
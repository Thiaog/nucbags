nucbaTeSaluda('shara');

//VALUES
1; //NUMBER
14.5; //NUMBER
'hola como estas?';
`hola como estas?` //STRING
true; //BOOLEAN
false; //BOOLEAN
null; // SIN VALOR
undefined; // NO DEFINIDO
[1,21,3,5,'hola',false] // ARRAY -> COLECCIONES DE VALUES, INDEXADOS EN 0 -> N
{
    nombre: 'thiago';
} // OBJETOS - COLECCIONES DE VALORES CLAVE -> VALOR

// OPERADORES
1 + 1; // - / * % **
"HOLA" + "COMO ESTAS?" // "HOLA COMO ESTAS?"
!false // true;
!true // false;

true || false; // Operador O -> true;
true && false; // Operador Y -> false;

3 == '3' // true
3 === 3 // true

//TYPE

typeof 321; // Number
typeof 'Nucba'; // String
typeof true; // Boolean
typeof undefined; // "undefined"
typeof {edad:35} // Object
typeof function (){} // Function // Son un subtype de object


typeof null; // Object WTF!!! Si, null es un objeto!!!
typeof [1,5,3.51] // Object 

//VARIABLES

var miVar = "hola";
var miNumero = 321321;
var miArray = [1,2,3,5,10,20];
var texto = 'largo de mi array: ' + miArray.length;

//console.log(miArray[1]);
//console.log('largo de mi array: ' + miArray.length);
//console.log(typeof texto);
//console.log(typeof console);

var numerito = 40;
numerito++;
console.log(numerito);
numerito += 10;
console.log(numerito);

//Condicionales

var edad = 14;

if (edad >= 18) {
    if (edad < 25) {
        console.log('Podes votar y sos joven');
        return;
    }
        console.log('podes votar y estas viejo');
    }


else {
    console.log('lo lamento todavia no tenes edad');
}
console.log('-------------------------------------------------\n');
console.log('******Loops******');

//LOOP Esto lo usamos para hacer algo en forma repetitiva o recorrer arrays / objetos

var alumnos = ['Mark', 'shara', 'seba1', 'seba2', 'tito']; // legnth = 6
for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i]);
    
}

console.log('-------------------------------------------------\n');
console.log('******Loops FOR OF ******');

 for (const alumno of alumnos) {
     console.log(alumno);
 }
     
 console.log('-------------------------------------------------\n');
 console.log('******Loops FOR IN ******');
 let miObjeto = { a: 1, b: 2, c: 3 };

 for (const propiedad in miObjeto) {
    console.log(`${propiedad}: ${miObjeto[propiedad]}`);
}

console.log('-------------------------------------------------\n');

console.log('****** FUNCTIONS ******');
//Functions!!!

function nucbaTeSaluda (nombre) {
    console.log(`nucba te saluda ${nombre}`);
}

nucbaTeSaluda('shara');
nucbaTeSaluda('shara');

console.log('-------------------------------------------------\n');

const multiplicarBy = (Number) => {
    let x = Number;
    return function (numeroDespues) {
        return x * numeroDespues;
    };
};

const multiplicarPor5 = multiplicarBy(5);
console.log(multiplicarPor5(5));
const multiplicarPor10 = multiplicarBy(10);
console.log(multiplicarPor10(10));
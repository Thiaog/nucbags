//ARRAYS - 1ER estructura de dato!
let miArray = new Array('asdas', 'ss', 15, {});
// console.log(miArray);

let miOtroArray = ['asdas', 'ss', 15, {}];
// console.log(miOtroArray);

let arrayChat = [
    ['Hola', '19:59', 'Facu'],
    ['Que haces Facu?', '20:05', 'Nicolas'],
];

// console.log(
//     'Mensaje de ' + arrayChat[0][2] + ' : ',
//     'Hora: ' + arrayChat [0][1] + '\n' + arrayChat[0][0]
// );
// console.log(
//     'Mensaje de ' + arrayChat[1][2] + ' : ',
//     'Hora: ' + arrayChat [1][1] + '\n' + arrayChat[1][0]
// )

//METODO PUSH - agrega al final del array
arrayChat.push(['aca andamo en clase de JS', '20:07', 'Facu']);
arrayChat.push(['Buenisimo', '20:07', 'Nico']);
arrayChat.push(['Vos que onda?', '20:08', 'Facu']);
arrayChat.push(['😃', '20:08', 'Facu']);
arrayChat.push(['😠 Pq el profe explica rapido', '20:09', 'Nico']);
arrayChat.push(['che, yo soy el profe 😐', '20:10', 'Facu']);

//METODO UNSHIFT - agrega al inciio del array
arrayChat.unshift(['ke hace', '18:07', 'Facu']);

//METODO POP - elimina el ultimo elemento del array
arrayChat.pop();
//METODO SHIFT - elimina el primer elemento  del array
arrayChat.shift();

// for (const msj of arrayChat) {
//     console.log(
//     'Mensaje de ' + msj[2] + ' : ',
//     'Hora: ' + msj [1] + '\n' + msj[0] + '\n'
// );
// //   console.log(msj);
// }

//SPLICE - (indexStart, indiceABorrar, Nuevo Valor);
// let miOtroChat = arrayChat.splice(1, 2, [
//  'agrega2 con splice',
//  '18:07', 
//  'Facu'
// ]);

// console.log(miOtroChat);
// console.log(arrayChat);

//SLICE - IGUAL QUE EN LOS STRINGS

// console.log(arrayChat.slice(0,3));

//IndexOf -
let deuda = [500, 'no'];
// console.log(deuda.indexOf('no'));

// if(deuda.indexOf('si')) === -1 {
//     console.log('Este gil no pago!');
// }
// else {
//     console.log('ATR no tenes deuda'); 
// }

//INCLUDES
let misNumeritos = [1,2,3,4,5,6,7,8,9]
// console.log(misNumeritos.includes(10));

//CONCATENAR ARRAYS
let miArrayDeTexto = ['Hola', 'Como estas'];
let miOtroArrayDeTexto = ['Todo bien'];                             //ESTO ES VIEJARDO
let miArrayTodoJunto = miArrayDeTexto.concat(miOtroArrayDeTexto);
// console.log(miArrayTodoJunto);

let miArrayDeTexto2 = ['Hola', 'Como estas'];
let miOtroArrayDeTexto2 = ['Todo bien'];                                   //ESTO ES NUEVARDO Y BUENARDO             
let miArrayTodoJunto2 = [...miArrayDeTexto2, ...miOtroArrayDeTexto2];
// console.log(miArrayTodoJunto2);

//REFERENCE TYPES - IN JS
let color = 'rojo'; // VARIABLE TIPO VALOR - se guarda el "VALOR"
let otroColor = color;//VARIABLE TIPO VALOR - se guardo "rojo"
console.log(color, otroColor);
otroColor = 'azul'; // Modifique el VALOR de otroColor, pero color no fue afectado

console.log(color,otroColor);

let arrayNum = [1,2,3,4,5] //VARIABLE TIPO REFERENCIAL - guarda el valor??? NO, GUARDA LA DIRECCION EN MEMORIA (0X122763428764823)
let miOtroArrayNum = arrayNum // <---- NO GUARDA [1,2,3,4,5] - GUARDA (0X122763428764823) - Esto es una referencia  a la direccion en momoria de Arraynum - como se dice en otros lenguajes un puntero. (pointers)
let miOtroArrayNoPuntero = [...arrayNum];
// miOtroArrayNum.push(6);
// miOtroArrayNum.push(7);
// console.log(arrayNum, miOtroArrayNum);

miOtroArrayNoPuntero.push(6);
miOtroArrayNoPuntero.push(7);
//console.log(arrayNum, miOtroArrayNoPuntero);

//OBJETOS - conjuntos de datos pero del Key - value pairs   
let miObj = new Object();

let miOtroObj = {}

let persona = {
    nombre: "Facu",
    apellido: "Diaz",
    edad: 32,
    casado: true,
};
let chatObj = {
    usuario: 'Facu',
    msj: 'LALALA',
    hora: 'hora: 20:05',
    23132: 10,
};
console.dir(chatObj['23132']);

//

const colores = {
    rojo: '#eb4d4b',
    amarillo: '#f9ca34',
    azul: '#30336b',
};
//juguemos a que este valor lo levantamos de una interfaz de usuario
// rojo - azul - amarillo
let inputUserValue = "rojo";
console.log(colores[inputUserValue]);

const alumno = {
    nombre: 'Lorenzo',
    apellido: 'Lopez',
    materias: ['Algebra','Analisi matematico','Quimica','Fisica'],
    tel: {
        cel: 111111,
        casa: 123456,
    },
    recursa: false,
};

const ARRAY_DE_ALUMNOS = [
    {
    nombre: 'Lorenzo',
    apellido: 'Lopez',
    materias: ['Algebra','Analisi matematico','Quimica','Fisica'],
    tel: {
        cel: 111111,
        casa: 123456,
    },
    recursa: false,
},
    {
    nombre: 'Lorena',
    apellido: 'Astrada',
    materias: ['Algebra','Analisi matematico','Quimica','Fisica'],
    tel: {
        cel: 111111,
        casa: 123456,
    },
    recursa: true,
},
    {
    nombre: 'Mabel',
    apellido: 'Gutierrez',
    materias: ['Algebra','Analisi matematico','Quimica','Fisica'],
    tel: {
        cel: 111111,
        casa: 123456,
    },
    recursa: false,
},
    {
    nombre: 'Diego',
    apellido: 'Messi',
    materias: ['Algebra','Analisi matematico','Quimica','Fisica'],
    tel: {
        cel: 111111,
        casa: 123456,
    },
    recursa: true,
},
];

//OPCION 1
for (const obj of ARRAY_DE_ALUMNOS) {
    let textoRecursa = obj.recursa 
    ? `Recursa materias - Llamar ${obj.tel.casa}` 
    : 'No recursa materias';
    console.log(`El alumno: ${obj.nombre} ${obj.apellido} ${textoRecursa} \n`);
}
//OPCION 2
for (const obj of ARRAY_DE_ALUMNOS) {
    if (obj.recursa) {
    console.log(
        `El alumno: ${Obj.nombre} ${obj.apellido} Recursa - Llamar : ${obj.tel.casa} \n`
    );
    }
    else {
        console.log(`El alumno: ${obj.nombre} ${obj.apellido} No recursa`);
    }
}
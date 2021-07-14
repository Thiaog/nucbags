//RECORDAMOS CALLBACKS
//GLOBAL
function soyUnaFn(fn) {
    //Scope soyUnaFn
    return logearFn('eyyyy estoy dentro de soyUnaFn \n');
}

function logearFn(text) {
    console.log(text);
}
soyUnaFn(logearFn);

//FUNCTION EXPRESSION

//NAMED FUNCTION
function esPar(n) {
    return m % 2 === 0;
}
//FUNCTION EXPRESSION
const esPar2 = function (n) {
    return n % 2 === 0;
};
//ARROW FUNCTION EXPRESSION
const esPar3 = (n) => {
    return n % 2 === 0;
};
//ARROW FUNCTION EXPRESSION CON RETURN INPLICITO
const esPar4 = (n) => n % 2 === 0;

//ARRAY CALLBACKS METHODS - son metodos que tienen los arrays que esperan callbacks como argumentos

console.log('\n');
console.log('----------FOREACH----------');
//FOREACH
let numeros = [1,2,3,4,5,6,7,8,9,10];

//
// numeros.forEach((value, idx) => {
//     console.log(value, idx);
// });

// for (let index = 0; index < numeros.length; index++) {
//   console.log(numeros[index]);   
// }

// for (const num of numeros) {
// console.log(num);
// }

// numeros.forEach((value) => {
//     if(value % 2 === 0) {
//         console.log(value);
//     }
// });

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

 ARRAY_DE_ALUMNOS.forEach((obj) => {
    let textoRecursa = obj.recursa 
    ? `Recursa materias - Llamar ${obj.tel.casa}` 
    : 'No recursa materias';

    console.log(`El alumno: ${obj.nombre} ${obj.apellido} ${textoRecursa} \n`);
});

console.log('\n');
console.log('----------MAP----------');

//MAP - Crea un nuevo array con el resultado de las operaciones definidas en el callback

let numeros2 = [1,2,3,4,5,6,7,8,9,10];
let dobles = numeros2.map((n) => {
    return n * 2;
});

console.log('[numeros2]: ' + numeros2);
console.log('[dobles]: ' + dobles);
console.log('\n');

let numObj = numeros2.map((n) => {
    return {
        numero: n,
        esPar: n % 2 === 0,
    };
});

console.log('[dobles]: ', numObj);
console.log('\n');

let nombreAlumnos = ARRAY_DE_ALUMNOS.map((alumno) => {
    return `${alumno.nombre} ${alumno.apellido}`;
});

console.log(nombreAlumnos)
console.log('\n');


console.log('\n');
console.log('----------FIND----------');
//FIND - devuelve el primer valor que encuentra que satisface la logica que le pasemos en el callback

let books = [
    'el hobbit',
    'narnia',
    'harry potter',
    'el señor de los anillos',
    'yo robot',
];

let book = books.find((book) => {
    return book.includes('el');
});
console.log(book);


let books2 = [
    {
        id: 12,
        titulo: 'el hobbit',
    },
    {
        id: 123,
        titulo: 'narnia',
    },
    {
        id: 1234,
        titulo: 'harry potter',
    },
    {
        id: 12345,
        titulo: 'el señor de los anillos',
    },
    {
        id: 123456,
        titulo: 'yo robot',
    },
];

//Supongamos que este valor lo obtenemos de un input de el usuario
let idBook = 123456;
let book2 = books2.find((book) => {
    return book.id === idBook;
});
console.log(book2);

console.log('\n');
console.log('----------FILTER----------');
//FILTER - devuelve un array con el/los elementos que cumplan con la logica que pasamos en el callback

let books3 = [
    {
        id: 12,
        titulo: 'el hobbit',
        author: 'J.R.R Tolkien',
        genero: ['ciencia ficcion', 'aventura'],
    },
    {
        id: 123,
        titulo: 'narnia',
        author: 'C.S Lewis',
        genero: ['ciencia ficcion', 'aventura'],
    },
    {
        id: 1234,
        titulo: 'harry potter',
        author: 'J.K Rowling',
        genero: ['ciencia ficcion', 'aventura'],
    },
    {
        id: 12345,
        titulo: 'el señor de los anillos',
        author: 'J.R.R Tolkien',
        genero: ['ciencia ficcion', 'aventura'],
    },
    {
        id: 123456,
        titulo: 'yo robot',
        author: 'Isaac Asimov',
        genero: ['ciencia ficcion', 'aventura'],
    },
    {
        id: 1234567,
        titulo: 'El ultimo teorema de Fermat',
        author: 'Simon Singh',
        genero: ['ciencia', 'matematicas', 'divulgacion cientifica'],
    },
    {
        id: 12345678,
        titulo: 'La puerta equivocada',
        author: 'Adrian Paenza',
        genero: ['ciencia', 'matematicas', 'divulgacion cientifica'],
    },
    {
        id: 123456789,
        titulo: 'Historia del tiempo',
        author: 'Stephen Hawking',
        genero: ['ciencia', 'fisica', 'divulgacion cientifica'],
    },
];

//Supongamos que este valor lo obtenemos de un input de el usuario
let autor = 'J.R.R Tolkien'
let genero = 'ciencia'

let librosFiltrados = books3.filter((book) => {
    let cond1 = book.author === autor; //TRUE - lo mete en el nuevo array
    let cond2 = book.genero.includes('ciencia ficcion');// TRUE si existe / FALSE sino hay ningun valor que coincida
    return cond1 && cond2;
});

const getBooks = (filtro, valor, arr) => {
    if (filtro !== 'genero') {
        return arr.filter((obj) => {
            return obj[filtro] === valor;
        });
    }
    return arr.filter((obj) => {
        return obj[filtro].includes(valor);
    });
};

let searchBooks = getBooks('genero', 'ciencia ficcion', books3)

console.log('[librosFiltrados] ', librosFiltrados);
console.log('\n');

if (searchBooks.length === 0) {
    console.log('[searchBooks]', 'no hay resultados para tu busqueda');
} else {
    console.log('[searchBooks] ', searchBooks);
}

//SOME AND EVERY
//EVERY devuelve true si todos cumplen la condicion del callback
//SOME devuelve true si al menos 1 cumplen la condicion del callback

console.log('\n');
console.log('----------SOME AND EVERY----------');

let arrayNums = [1,3,5,8,9]
console.log(arrayNums.every((n) => n % 2 === 1));
console.log(arrayNums.some((n) => n % 2 === 0));



console.log('\n');
console.log('----------SORT----------');
//SORT - convierte en string
let arrayNums2 = [11.99,77.88,8,1,99.99,9];

console.log(arrayNums2.sort());
console.log(arrayNums2.sort((a,b) => a - b)); // ORDEN ASCENDENTE
console.log(arrayNums2.sort((a,b) => b - a)); // ORDEN DESCENDENTE

// a - b => -n => ordena a antes que b
// a - b => +n => ordena b antes que a


console.log('\n');
console.log('----------REDUCE----------');
//REDUCE - toma los valores de un array y lo reduce a un solo valor;

let arrayNums3 = [1,2,3,4,5,6,7,8,9,10]
let resultado = arrayNums3.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
});

console.log('[reduce arrayNums3]: ',resultado);
console.log('\n');
let numObj2 = [
    { value: 10 },
    { value: 10 },
    { value: 10 },
    { value: 10 },
    { value: 10 },
];
let resultado2 = numObj2.reduce((acumulador,valorActual) => {
    return acumulador + valorActual.value;
}, 0);

let resultado3 = numObj2.reduce((acumulador,valorActual) => {
    return { value: acumulador.value + valorActual.value};
});

let resultado4 = numObj2.reduce((acumulador,valorActual) => {
    acumulador['value'] = acumulador.value + valorActual.value;
    return acumulador;
}, {value:0}
);

console.log('[reduce numObj]: ',resultado2);
console.log('\n');

console.log('[reduce numObj v2]: ',resultado3);
console.log('\n');

console.log('[reduce numObj v3]: ',resultado4);
console.log('\n');
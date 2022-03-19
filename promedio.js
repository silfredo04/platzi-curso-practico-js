const lista1 = [
    100,
    200,
    300,
    500,
];



function CalcularMediaAritmetica(lista){
    // let sumaLista = 0;


    // for(let i = 0;  i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento ;
        }
    );     // el metodo reduce() nos ayuda a sumar cada elemento que hay en el array o multiplicarlos etc

    const PromedioLista = sumaLista / lista.length;

    return PromedioLista;
};

const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];


/* Multiplicar cada número de la lista por su peso
Vamos a usar de nuevo el método map de los arrays. Crearemos un nuevo arreglo 
de solo números a partir de multiplicar cada nota con sus créditos.*/

const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

/* Sumar todos los elementos del arreglo de elementos multiplicados por su peso
Vamos a usar de nuevo el método reduce de los arrays.

Crearemos una nueva variable notesWithCredit que tenga como resultado la suma de todos
 los elementos del arreglo sumOfNotesWithCredit. Recuerda que la función reduce recibe 
 una función con dos parámetros: el valor acumulado (que para evitar errores debemos inicializar con 0) 
 y el nuevo elemento de los arrays.*/

 const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

/* Sumar todos los pesos (créditos)
Sí, otra vez map y reduce. Vamos a crear un nuevo arreglo credits únicamente 
con los créditos de cada materia y otra nueva variable sumOfCredits que recorra 
el arreglo credits y sume sus elementos.*/

const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

/* Hacer la división entre ambas “sumas”
Lo último que nos falta es dividir nuestra variable sumOfNotesWithCredit 
sobre la variable sumOfCredits.*/

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
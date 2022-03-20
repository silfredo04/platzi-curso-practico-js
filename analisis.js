

// funciones helpers

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
}


function esPar(num){  
    return (num % 2 ===0);
}

//Calculadora de mediana

function medianaSalary(lista){
    const mitad = parseInt(lista.length / 2); 

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = CalcularMediaAritmetica([
            personaMitad1,
            personaMitad2
        ]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// mediana general 

const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);


const salariosColSortd = salariosCol.sort(
    function(salaryA , salaryB){
        return salaryA - salaryB;
    }
); // ordenar salario de menor a mayor 



const medianaGeneralCol =medianaSalary(salariosColSortd);

// Mediana del Top 10%

const spliceStart = (salariosColSortd.length * 90) / 100 ;
const spliceCount = salariosColSortd.length - spliceStart;

const salariosTop10Col = salariosColSortd.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Col =medianaSalary(salariosTop10Col);

console.log(
    medianaGeneralCol,
    medianaTop10Col
);
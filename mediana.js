lISTA1 = [
    100,
    200,
    500,
    400000000,
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
}

const MitadLista1 = parseInt(lISTA1.length / 2);

function esPar(num){
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

if(esPar(lISTA1.length)){
    const elemento1 = lISTA1[MitadLista1 - 1 ];
    const elemento2 = lISTA1[MitadLista1];

    const promedioElemento1y2 = CalcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElemento1y2; 

}else{
    mediana = lISTA1[MitadLista1];
}
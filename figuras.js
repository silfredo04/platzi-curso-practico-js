
// codigo del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");


function perimetroCuadrado (lado){
    return lado * 4;
} 

 //console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

 function areaCuadrado (lado) {
    return lado * lado;
 }

 //console.log("El area del cuadrado es: " + areaCuadrado + "cm²");
 console.groupEnd();

 // codigo del triangulo
 console.group("Triangulo");
 /*const ladoTriangulo1 = 6;
 const ladoTriangulo2 = 6;
 const baseTriangulo = 4;
 const alturaTriangulo = 5.5;

 console.log(
     "Los lados del triangulo son:  " 
     +ladoTriangulo1 
     +"cm,  " 
     +ladoTriangulo2 
     +"cm,  "
     +baseTriangulo 
     +"cm" );

console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");*/

function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
} 

//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(baseTriangulo,alturaTriangulo){
    return (baseTriangulo * alturaTriangulo)/2;
} 

//console.log("El area del triangulo es: " + areaTriangulo + "cm²");

console.groupEnd();

// Codigo del circulo

console.group("Circulos");

// Radio

//const radioCirculo = 4;

//console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro

function diametroCirculo(radioCirculo){
    return  radioCirculo * 2;
} 

//console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// pi

const PI = Math.PI;

console.log("El valor de PI es: " + PI );

// Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return  diametro * PI;
}

//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

// Area 

function areaCirculo(radioCirculo) {
    return (radioCirculo * radioCirculo)* PI;
} 

//console.log("El area del circulo es: " + areaCirculo + "cm");

console.groupEnd();


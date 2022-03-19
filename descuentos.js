//const precioOriginal = 120;
//const descuento = 18;


function CalcularPrecioConDescuento(precio,descuento){
    const PorcentajeDelPrecioConDescuento = 100 - descuento;
    const PrecioConDescuento = (precio * PorcentajeDelPrecioConDescuento) / 100;

    return PrecioConDescuento;
}

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function onclickPrecioDescuento(){
    const inputProducto = document.getElementById("inputProducto");
    const PrecioValue = inputProducto.value;

    /*const inputDescuento = document.getElementById("inputDescuento");
    const DescuentoValue = inputDescuento.value;*/

    const inputCoupon  = document.getElementById("InputCoupon");
    const couponValue  = inputCoupon.value;

    let descuento;

    switch(couponValue) {
        case coupons[0]: // "JuanDC_es_Batman"
        descuento = 15;
        break;
        case coupons[1]: // "pero_no_le_digas_a_nadie"
        descuento = 30;
        break;
        case coupons[2]: // "es_un_secreto"
        descuento = 25;
        break;
    }


    const PrecioConDescuento = CalcularPrecioConDescuento(PrecioValue,descuento);
    const resultadoP = document.getElementById("ResultadoPrecio");

    resultadoP.innerText= "El precio con descuento es: $" + PrecioConDescuento;
}



/*console.log({
    precioOriginal,
    descuento,
    PorcentajeDelPrecioConDescuento,
    PrecioConDescuento,
});*/
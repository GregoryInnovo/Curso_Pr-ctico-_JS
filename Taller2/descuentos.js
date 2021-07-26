// const precioOriginal = 120
// const descuento = 18


// console.log({
//     precioOriginal,
//     descuento,
//     porcetajePrecioConDescuento,
//     precioConDescuento,
// })

function CalcularPrecioConDescuento(precio, descuento) {
    const porcetajePrecioConDescuento = 100 - descuento
    const precioConDescuento = (precio * porcetajePrecioConDescuento) / 100
    
    return precioConDescuento
}
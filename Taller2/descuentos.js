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

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = Number(inputPrice.value)
    
    const inputDiscount = document.getElementById("InputDiscount")
    const discountValue = Number(inputDiscount.value)

    const precioConDescuento = CalcularPrecioConDescuento(priceValue, discountValue)
    
    const resultP = document.getElementById("ResultPrice")
    resultP.innerText = `El precio con descuento son: $${precioConDescuento}`

}
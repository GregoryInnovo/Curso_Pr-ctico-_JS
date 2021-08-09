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

    const inputCoupon = document.getElementById("InputCoupon")
    const couponValue = inputCoupon.value
    let finalRes = 0
    const COUPON = "FREE"

    if(couponValue == COUPON) {
        finalRes = ValidateCoupon(precioConDescuento)
        const resultP = document.getElementById("ResultPrice")
        resultP.innerText = `El precio con descuento son: $${finalRes}`
    } else {
        const resultP = document.getElementById("ResultPrice")
        resultP.innerText = `El precio con descuento son: $${precioConDescuento}`
    }

}

function ValidateCoupon(precioConDescuento) {
    return (precioConDescuento * 50) / 100
}
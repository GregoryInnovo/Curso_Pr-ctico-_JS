// code of square
console.group("Cuadrado")
const ladoCuadrado = 5

console.log(`Lados del cuadrado miden: ${ladoCuadrado}cm`)

function perimetroCuadrado(lado) {
    return lado * 4
}

perimetroCuadrado()

// console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm`)

function areaCuadrado(lado) {
    return lado * lado
}

// console.log(`El area del cuadrado es: ${areaCuadrado}cm^2`)

console.groupEnd()

// code of triangle
console.group("Triangulo")

const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo3 = 4

console.log(
    `Lados del triangulo miden: 
    ${ladoTriangulo1}cm 
    ${ladoTriangulo2}cm 
    ${baseTriangulo3}cm`
)

const alturaTriangulo = 5.5

console.log(`La altura del triangulo o es: ${alturaTriangulo}cm`)

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
} 

// console.log(`El perímetro del triangulo es: ${perimetroTriangulo}cm`)


function areaTriangulo(base, altura) {
    return (base * altura) / 2
} 

// console.log(`El area del triangulo es: ${areaTriangulo}cm^2`)

console.groupEnd()

// code of circle
console.group("Circunferencia")
 
// Radio
// const radioCirculo = 4
// console.log(`El radio del circulo es: ${radioCirculo}cm`)

// Diámetro
function diametroCirculo(radio) {
    return radio * 2
}
// console.log(`El diámetro del circulo es: ${diametroCirculo}cm`)

// PI
const PI = Math.PI
console.log(`PI es: ${PI}cm`)

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI
}
// console.log(`El perimetro del circulo es: ${perimetroCirculo}cm`)

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI
}
// console.log(`El área del circulo es: ${areaCirculo}cm^2`)

console.groupEnd()

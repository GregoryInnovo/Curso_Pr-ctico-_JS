// code of square
console.group("Cuadrado")
const ladoCuadrado = 5

console.log(`Lados del cuadrado miden: ${ladoCuadrado}cm`)

const perimetroCuadrado = ladoCuadrado * 4

console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm`)

const areaCuadrado = ladoCuadrado * ladoCuadrado

console.log(`El area del cuadrado es: ${areaCuadrado}cm^2`)

console.groupEnd()

// code of triangle
console.group("Cuadrado")

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

const permitroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3
console.log(`El perímetro del triangulo es: ${permitroTriangulo}cm`)

const areaTriangulo = (baseTriangulo3 * alturaTriangulo) / 2

console.log(`El area del triangulo es: ${areaTriangulo}cm^2`)

console.groupEnd()

// code of circle
console.group("Circunferencia")
 
// Radio
const radioCirculo = 4
console.log(`El radio del circulo es: ${radioCirculo}cm`)

// Diámetro
const diametroCirculo = radioCirculo * 2
console.log(`El diámetro del circulo es: ${diametroCirculo}cm`)

// PI
const PI = Math.PI
console.log(`PI es: ${PI}cm`)

// Circunferencia
const perimetroCirculo = diametroCirculo * PI
console.log(`El perimetro del circulo es: ${perimetroCirculo}cm`)

// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI
console.log(`El área del circulo es: ${areaCirculo}cm^2`)

console.groupEnd()

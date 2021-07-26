// code of square
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

// code of triangle
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// code of circle
// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log(`PI es: ${PI}cm`);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return radio * radio * PI;
}

// Connect with HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const inputBase = document.getElementById("InputTrianguloBase");
  const inputLado = document.getElementById("InputTrianguloLado");
  const base = Number(inputBase.value);
  const lado = Number(inputLado.value);

  const perimetro = perimetroTriangulo(lado, lado, base);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("InputTrianguloBase");
  const inputLado = document.getElementById("InputTrianguloLado");

  // hallar altura
  const base = Number(inputBase.value);
  const lado = Number(inputLado.value);
  const altura = calcularAlturaTriangulo(lado, base);

  const area = areaTriangulo(base, altura);
  alert(area);
}

function calcularAlturaTriangulo(lado, base) {
  return Math.sqrt(Math.pow(lado, 2) - Math.pow(base / 2, 2));
}

function calcularPerimetroCirculo() {
  const inputRadio = document.getElementById("InputCirculoRadio");

  const radio = Number(inputRadio.value);


  const perimetro = perimetroCirculo(radio);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const inputRadio = document.getElementById("InputCirculoRadio");

  const radio = Number(inputRadio.value);

  const area = areaCirculo(radio);
  alert(area);
}

var peso;
var altura;
var imc;
var result;

function Calcular(event) {
    event.preventDefault();
  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;

  imc = peso / (altura * altura);
  if (imc < 18.5) {
    resultado = document.getElementById("result");
    resultado.innerHTML = "O seu imc é: " + imc + " BAIXO PESO!";
  } else if (imc > 18.5 && imc < 24.9) {
    resultado = document.getElementById("result");
    resultado.innerHTML = "O seu imc é: " + imc + " PESO ADEQUADO!"
  } else if (imc >= 25 && imc < 29.9) {
    resultado = document.getElementById("result");
    resultado.innerHTML = "O seu imc é: " + imc + " SOBREPESO!";
  } else {
    resultado = document.getElementById("result");
    resultado.innerHTML = "O seu imc é: " + imc + " OBSESIDADE!"
  }
}

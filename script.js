var numeroAdivinhar = parseInt(Math.random() * 11);
var count = 3;
var result = document.getElementById("resultado");
var dicas = document.getElementById("dicas");
var tentativas = document.getElementById("tentativas");
var resultadoDoNumero = document.getElementById("numeroCorreto");
//variáveis
function Chutar() {
  var numero = parseInt(document.getElementById("valor").value);
  var numero2 = document.getElementById("valor").value;

  if (numero == numeroAdivinhar) {
    result.innerHTML = "Você acertou o número é " + numero + "!";
    document.getElementById("chutar").disabled = true;
    document.getElementById("numeroAleatorio").disabled = false;
  } else if (numero > 10 || numero < 0) {
    result.innerHTML = "Escreva um número entre 0 a 10";
  } else {
    result.innerHTML = "Você errou o número não é " + numero;
    count--;
    tentativas.innerHTML = "Você só tem " + count + " tentativas";
  }

  if (numero < numeroAdivinhar) {
    dicas.innerHTML = "O número é maior que " + numero;
  } else {
    var dicas1 = (dicas.innerHTML = "O Número é menor que " + numero);
    if (numeroAdivinhar == numero || numero > 10 || numero < 0 || count == 0) {
      dicas.innerHTML = "";
      numeroAdivinhar;
    }
  }
  if (count == 0) {
    resultadoDoNumero.innerHTML = "O número correto é " + numeroAdivinhar;
    document.getElementById("chutar").disabled = true;
    document.getElementById("numeroAleatorio").disabled = false;
  } else {
    resultadoDoNumero.innerHTML = "";
  }
  if (numero2 == "") {
    result.innerHTML = "Insira um Número";
    dicas.innerHTML = "";
  }
  document.getElementById("valor").value = "";
}

function numeroAleatorio() {
  numeroAdivinhar = parseInt(Math.random() * 11);
  document.getElementById("chutar").disabled = false;
  count = 3;
  tentativas.innerHTML = "Você só tem " + count + " tentativas";
  dicas.innerHTML = "";
  result.innerHTML = "";
  resultadoDoNumero.innerHTML = "";
  document.getElementById("numeroAleatorio").disabled = true;
}

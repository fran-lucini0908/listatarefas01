const prompt = require("prompt-sync")();

let numero;
let peso;
let soma = 0;
let somaPesos = 0;

while (numero !== 0) {
  numero = parseFloat(prompt("Digite um número: "));
  peso = parseFloat(prompt("Digite o peso do número: "));

  if (numero != 0) {
    soma += numero * peso;
    somaPesos += peso;
  }
}

let media = soma / somaPesos;
console.log(media);

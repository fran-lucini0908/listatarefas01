const prompt = require("prompt-sync")();

let numero;
let soma = 0;
let i = 0;

while (numero !== 0) {
  numero = parseFloat(prompt("Digite um número ou 0 para sair: "));

  if (numero != 0) {
    soma += numero;
    i++;
  }
}

let media = soma / i;
console.log(media.toFixed(2));

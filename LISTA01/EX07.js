const prompt = require("prompt-sync")();

let macasCompradas = parseInt(prompt("Digite quantas maçãs foram compradas: "));
let precoAbaixoDeDoze = 0.3;
let precoDozeOuMais = 0.25;
let valorTotalCompra;

if (macasCompradas < 12) {
  valorTotalCompra = macasCompradas * precoAbaixoDeDoze;
  console.log(`Valor total à pagar R$ ${valorTotalCompra.toFixed(2)}`);
} else {
  valorTotalCompra = macasCompradas * precoDozeOuMais;
  console.log(`Valor total à pagar R$ ${valorTotalCompra.toFixed(2)}`);
}

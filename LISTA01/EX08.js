const prompt = require("prompt-sync")();

let valor1 = parseInt(prompt("Digite o primeiro valor: "));
let valor2 = parseInt(prompt("Digite o segundo valor: "));

do {
  valor1 = parseInt(prompt("Digite o primeiro valor: "));
  valor2 = parseInt(prompt("Digite o segundo valor: "));
} while (valor1 === valor2);

if (valor1 < valor2) {
  console.log(valor1, valor2);
} else {
  console.log(valor2, valor1);
}

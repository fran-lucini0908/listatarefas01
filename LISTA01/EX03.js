const prompt = require("prompt-sync")();

let valor1 = parseInt(prompt("Digite o primeiro número: "));
let valor2 = parseInt(prompt("Digite o segundo número: "));
let valor3 = parseInt(prompt("Digite o terceiro número: "));
let valor4 = parseInt(prompt("Digite o quarto número: "));

let somaPrimeiroValor = valor1 + 25;
let triplicaSegundoValor = valor2 * 3;
let modificaTerceiroValor = valor3 * 0.12;
valor4 = valor1 + valor2 + valor3 + valor4;

console.log();
console.log(`Soma primeiro valor: ${valor1} + 25 = ${somaPrimeiroValor}`);
console.log(
  `Segundo valor triplicado: ${valor2} * 3 = ${triplicaSegundoValor}`
);
console.log(
  `Terceiro valor modificado: ${valor3} * 0.12 = ${modificaTerceiroValor.toFixed(
    2
  )}`
);
console.log(
  `Soma dos valores originais: ${valor1} + ${valor2} + ${valor3} = ${valor4}`
);

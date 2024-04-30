const prompt = require("prompt-sync")();

let a = parseInt(prompt("Digite o valor do primeiro lado: "));
let b = parseInt(prompt("Digite o valor do segundo lado: "));
let c = parseInt(prompt("Digite o valor do terceiro lado: "));

console.log();

if (a + b > c && a + c > b && b + c > a) {
  if (a === b && a === c && b === c) {
    console.log("É um triângulo e é do tipo equilátero");
  } else if (a != b && a != c && b != c) {
    console.log("É um triângulo e é do tipo escaleno");
  } else if (a === b || a === c || b === c) {
    console.log("É um triângulo e é do tipo isósceles");
  }
} else {
  console.log("Isso não é um triângulo");
}

const prompt = require("prompt-sync")();

let codigoOrigemProduto = parseInt(
  prompt("Digite o código de origem do produto: ")
);

if (codigoOrigemProduto === 1) {
  console.log("Sul");
} else if (codigoOrigemProduto === 2) {
  console.log("Norte");
} else if (codigoOrigemProduto === 3) {
  console.log("Leste");
} else if (codigoOrigemProduto === 4) {
  console.log("Oeste");
} else if (codigoOrigemProduto === 5 || codigoOrigemProduto === 6) {
  console.log("Nordeste");
} else if (codigoOrigemProduto >= 7 && codigoOrigemProduto <= 9) {
  console.log("Sudeste");
} else if (codigoOrigemProduto >= 10 && codigoOrigemProduto <= 20) {
  console.log("Centro-Oeste");
} else if (codigoOrigemProduto >= 25 && codigoOrigemProduto <= 50) {
  console.log("Nordeste");
} else {
  console.log("Fora dos Intervalos - Produto Importado");
}

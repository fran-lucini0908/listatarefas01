const prompt = require("prompt-sync")();

let n;

for (let i = 1; i <= 5; i++) {
  n = parseInt(prompt("Digite um valor: "));
  for (let j = 1; j <= n; j++) {
    console.log(`${j} x ${n} = ${j * n}`);
  }
}

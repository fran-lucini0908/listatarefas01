const prompt = require("prompt-sync")();

let inicio = 101;
let numeroPrimo = 0;

while (numeroPrimo < 50) {
  let divisor = 3;

  while (divisor * divisor <= inicio) {
    if (inicio % divisor === 0) {
      break;
    }
    divisor += 2;
  }

  let condicaoIfResumida = divisor * divisor > inicio || inicio === 2;

  if (condicaoIfResumida) {
    console.log(inicio);
    numeroPrimo++;
  }

  inicio += 2;
}

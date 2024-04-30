const prompt = require("prompt-sync")();

let numeroEleitores = parseInt(
  prompt("Digite o número de eleitores do município: ")
);
let numeroVotosBrancos = parseInt(prompt("Digite o número de votos brancos: "));
let numeroVotosNulos = parseInt(prompt("Digite o número de votos nulos: "));
let numeroVotosValidos = parseInt(prompt("Digite o número de votos válidos: "));

let percentualVotosBrancos = (numeroVotosBrancos / numeroEleitores) * 100;
let percentualVotosNulos = (numeroVotosNulos / numeroEleitores) * 100;
let percentualVotosValidos = (numeroVotosValidos / numeroEleitores) * 100;

console.log();
console.log(`${percentualVotosBrancos} (percentual de votos brancos)`);
console.log(`${percentualVotosNulos} (percentual de votos nulos)`);
console.log(`${percentualVotosValidos} (percentual de votos válidos)`);

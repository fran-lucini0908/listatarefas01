const prompt = require("prompt-sync")();

let celsius = parseFloat(prompt("Digite a temperatura em Celsius: °"));
let fahrenheit = celsius * 1.8 + 32;

console.log(`${fahrenheit} (temperatura em Fahrenheit)`);

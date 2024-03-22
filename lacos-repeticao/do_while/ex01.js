const read = require("readline-sync");

let numero,
  positivo = 0;

do {
  numero = read.questionInt("Escreva um numero: ");
  if (numero > 0) {
    positivo += numero;
  }
} while (numero != 0);

console.log(`\nSoma dos numeros: ${positivo}`);

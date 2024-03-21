const read = require("readline-sync");

let a, b, c, soma;

a = read.questionInt("Digite o numero A: ");
b = read.questionInt("Digite o numero B: ");
c = read.questionInt("Digite o numero C: ");

soma = a + b;

if (soma > c) {
  console.log(`A soma entre a: ${a} e b: ${b}, é maior que c: ${c}`);
} else if (soma < c) {
  console.log(`A soma entre a: ${a} e b: ${b}, é menor que c: ${c}`);
} else {
  console.log(`A soma entre a: ${a} e b: ${b}, é igual a c: ${c}`);
}

const read = require("readline-sync");

let b;
a = read.questionInt("Digite um numero ");

if (a > 0) {
  b = `positivo`;
} else {
  b = `negativo`;
}

if (a % 2 == 1) {
  console.log(`${a} é um numero impar e ${b}`);
} else {
  console.log(`${a} é um numero par e ${b}` );
}

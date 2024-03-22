const read = require("readline-sync");

let idade21 = 0,
  idade50 = 0,
  count = 0;

while (count >= 0) {
  count = read.questionInt("Qual sua idade");

  if (count <= 21 && count > 0) {
    idade21++;
  } else if (count >= 50) {
    idade50++;
  }
}

console.log("Idade menores ou iguais a 21", idade21);
console.log("\n Idade menores ou iguais a 50", idade50);

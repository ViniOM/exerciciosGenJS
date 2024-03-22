const read = require("readline-sync");

let opcao, quantidade;

console.log("\nQual opção deseja do cardapio?\n");
console.log("--------------------------------");
console.log("1- Cachorro Quente - R$10,00");
console.log("2- X-Salada - R$15,00");
console.log("3- X-Bacon - R$18,00");
console.log("4- Bauru - R$12,00");
console.log("5- Refrigerante - R$08,00");
console.log("6- Suco de laranja - R$13,00");
console.log("--------------------------------\n");

opcao = read.questionInt("Escolha uma opcao:\n");
quantidade = read.questionInt("Quantas quantidades deseja?\n");

if (opcao <= 6 && quantidade > 0) {
  switch (opcao) {
    case 1:
      console.log("\nCachorro Quente - R$10,00");
      console.log(`Quantidade: ${quantidade}`);
      console.log(`Valor total do pedido: R$${(10.0 * quantidade).toFixed(2)}`);
      console.log("Saindo agora mesmo!");
      break;
    case 2:
      console.log("\nX-Salada - R$15,00");
      console.log(`Quantidade: ${quantidade}`);
      console.log(`Valor total do pedido: R$${(15.0 * quantidade).toFixed(2)}`);
      console.log("Saindo agora mesmo!");
      break;
    case 3:
      console.log("\nX-Bacon - R$18,00");
      console.log(`Quantidade: ${quantidade}`);
      console.log(`Valor total do pedido: R$${(18.0 * quantidade).toFixed(2)}`);
      console.log("Saindo agora mesmo!");
      break;
    case 4:
      console.log("\nBauru - R$12,00");
      console.log(`Quantidade: ${quantidade}`);
      console.log(`Valor total do pedido: R$${(12.0 * quantidade).toFixed(2)}`);
      console.log("Saindo agora mesmo!");
      break;
    case 5:
      console.log("\nRefrigerante - R$08,00");
      console.log(`Quantidade: ${quantidade}`);
      console.log(`Valor total do pedido: R$${(8.0 * quantidade).toFixed(2)}`);
      console.log("Saindo agora mesmo!");
      break;
    case 6:
      console.log("\nSuco de laranja - R$13,00");
      console.log(`Quantidade: ${quantidade}`);
      console.log(`Valor total do pedido: R$${(13.0 * quantidade).toFixed(2)}`);
      console.log("Saindo agora mesmo!");
      break;
  }
} else {
  console.log("\n#### Digite A opcao dentro da lista ####\n");
}

console.log("--------------------------------");
console.log("       Fim do cardapio!          ");
console.log("--------------------------------");

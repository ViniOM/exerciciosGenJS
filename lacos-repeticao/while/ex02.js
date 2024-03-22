const read = require("readline-sync");

let idade, area, media=0, totalIdade=0;
let escolha;
let contador = 0;
let mulherCis = 0,
  homemCis = 0,
  mulherTrans = 0,
  homemTrans = 0,
  naoBinario = 0;
let mulherCisTrans = 0,
  homemCisTrans = 0,
  binarioDevFull = 0;
let backend = 0,
  frontend = 0,
  mobile = 0,
  fullstack = 0;

while (escolha !== "N") {
  contador++;
  console.log("\n---- PESQUISA ----");

  idade = read.questionInt("\nIdade: ");


  console.log("\n---- IDENTIDADE DE GENERO ----\n");

  console.log("1 – Mulher Cis ");
  console.log("2 – Homem Cis ");
  console.log("3 - Não Binario");
  console.log("4 - Mulher Trans");
  console.log("5 – Homem Trans ");
  let identidade = read.questionInt("\nIdentidade de genero: ");
  switch (identidade) {
    case 1:
      mulherCis++;
      break;
    case 2:
      homemCis++;
      break;
    case 3:
        naoBinario++;   
      break;
    case 4:
        mulherTrans++;
      break;
    case 5:
        homemTrans++;
      break;
  }


  console.log("\n---- AREA DE ATUACAO ----\n");

  console.log("1 – Backend ");
  console.log("2 – Frontend ");
  console.log("3 - Mobile");
  console.log("4 - FullStack");
  area = read.questionInt("\nPessoa Desenvolvedora ");
  switch (area) {
    case 1:
      backend++;
      break;
    case 2:
      frontend++;
      break;
    case 3:
      mobile++;
      break;
    case 4:
      fullstack++;
      break;
  }

  if ((identidade === 1 || identidade === 4) && area === 2) {
    mulherCisTrans++;
  } 
  
  if (
    (identidade === 2 || identidade === 4) &&
    area === 3 &&
    idade > 40
  ) {
    homemCisTrans++;
  } 
  
  if (identidade === 3 && area === 4 && idade < 30) {
    binarioDevFull++;
  }

  escolha = read.question("\nDeseja Continuar? (S/N) ").toUpperCase();

  totalIdade = totalIdade + idade;
}

media = totalIdade / contador;

console.log(`Pessoas desenvolvedoras Backend: ${backend}\n`);
console.log(`
  Numero de mulheres Cis e Trans desenvolvedoras front-end: ${mulherCisTrans}`
);
console.log(`
  Total de Homens Cis e Trans desenvolvedor Mobile maiores de 40 anos: ${homemCisTrans}`
);
console.log(`
  Total de pessoas Nao Binarias desenvolvedoras Full Stack menores de 30 anos: ${binarioDevFull}`
);
console.log(`
  O numero total de pessoas que responderam a pesquisa: ${contador}`
);
console.log(`
  A media de idade das pessoas que responderam a pesquisa: ${media}`
);

console.log("\n---- FINALIZADO ----\n");
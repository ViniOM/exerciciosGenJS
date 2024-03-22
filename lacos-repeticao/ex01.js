const read = require("readline-sync");

let numero1, numero2;

numero1 = read.questionInt("Digite o primeiro numero: ");
numero2 = read.questionInt("Digite o segundo numero: ");

if (numero1 >= numero2) {
  console.log(
    "Intervalo invalido!"
  );
} 
else {
  for (let numero = numero1; numero <= numero2; numero++) {
    if (numero % 3 === 0 && numero % 5 === 0) {
      console.log(`${numero} é multiplo de 3 e 5 `);
    }
  }
  
}

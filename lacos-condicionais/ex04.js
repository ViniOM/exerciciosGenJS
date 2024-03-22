const read = require("readline-sync");

let escolha;

console.log("\n---------------");
console.log("    Animais    ");
console.log("---------------");

// vertebrado ou invertebrado
console.log("\n1 - Vertebrado");
console.log("        ou");
console.log("2 - Invertebrado\n");

escolha = read.questionInt("Escolha a opcao: ");
console.clear();

if (escolha === 1) {
  console.log("\n---------------\n");
  console.log("\n1 -   Ave");
  console.log("       ou");
  console.log("2 - Mamifero\n");
  console.log("\n---------------");
  escolha = read.questionInt("Escolha a opcao: ");
  console.clear();

  if (escolha === 1) {
    console.log("\n---------------\n");
    console.log("\n1 - Carnivoro");
    console.log("       ou");
    console.log("2 - Onivoro\n");
    console.log("\n---------------");
    escolha = read.questionInt("Escolha a opcao: ");
    console.clear();

    if (escolha === 1) {
      console.log("\n---------------\n");
      console.log("");
      console.log("   Aguia   ");
      console.log("");
      console.log("\n---------------");
      console.clear();
    }
    else if(escolha == 2) {
      console.log("\n---------------\n");
      console.log("");
      console.log("   Pomba   ");
      console.log("");
      console.log("\n---------------");
      console.clear();
    }
    
  
  } else if (escolha === 2) {
    console.log("\n---------------\n");
    console.log("\n1 -  Onivoro");
    console.log("       ou");
    console.log("2 - Herbivoro\n");
    console.log("\n---------------");
    escolha = read.questionInt("Escolha a opcao: ");
    console.clear();

  }

} else if (escolha === 2) {
  console.log("\n---------------");
  console.log("\n1 -  Inseto");
  console.log("       ou");
  console.log("2 - Anelideo\n");
  console.log("\n---------------");

  escolha = read.questionInt("Escolha a opcao: ");
  console.clear();
} else {
}

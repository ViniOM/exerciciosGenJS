const input = require("readline-sync");

const salario = input.questionFloat("Qual o seu salario? ");

const abono = input.questionFloat("Qual o valor de abono? ");

const novoSalario = salario + abono;

console.log(`Seu novo salario é R$ ${novoSalario.toFixed(2)}`);
